import { Controller, Get, Post, Body, Param, Inject, ParseUUIDPipe, Query, Patch } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateOrderDto, OrderPaginationDto, StatusDto } from './dto';
import { NATS_SERVICE, ORDER_SERVICE } from 'src/config';
import { catchError } from 'rxjs';
import { PaginationDto } from 'src/common';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(NATS_SERVICE) private readonly natsClient: ClientProxy
  ) { }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.natsClient.send('createOrder', createOrderDto)
      .pipe(
        catchError((error) => { throw new RpcException(error) })
      );
  }

  @Get()
  findAll(
    @Query() orderPaginationDto: OrderPaginationDto,
  ) {
    return this.natsClient.send('findAllOrders', orderPaginationDto)
      .pipe(
        catchError((error) => { throw new RpcException(error) })
      );
  }

  @Get('id/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.natsClient.send('findOneOrder', { id })
      .pipe(
        catchError((error) => { throw new RpcException(error) })
      );
  }

  @Get(':status')
  findAllByStatus(
    @Param() statusDto: StatusDto,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.natsClient.send('findAllOrders', {
      ...paginationDto,
      status: statusDto.status,
    }).pipe(
      catchError((error) => { throw new RpcException(error) })
    );
  }

  @Patch(':id')
  updateStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() statusDto: StatusDto,
  ) {
    return this.natsClient.send('changeOrderStatus', {
      id,
      status: statusDto.status,
    }).pipe(
      catchError((error) => { throw new RpcException(error) })
    );
  }
}
