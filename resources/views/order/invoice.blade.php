<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>{!! $model->invoice_on.' - MealPlan Order' !!}</title>
    <style>
        body {
            background-color: #FFF;
            color: #000;
        }
    </style>
</head>
<body>
<div class="container-fluid p-5">
    <div class="row">
        <div class="col">
            <div class="invoice-title">
                <h3 class="pull-right">Order ID: &nbsp;#{{$model->id}}</h3>
                <h2>orders.text_invoice</h2>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col py-3">
            <hr>
        </div>
    </div>

    <div class="row">
        <div class="col-6">
            <strong>text_restaurant</strong><br>
            <span>Location Name</span><br>
            <address>Location Address</address>
        </div>
        <div class="col-6 text-right">
            <img class="img-responsive" src="{{ uploads_url(setting('invoice_logo') ?: setting('site_logo')) }}" alt="" style="max-height:120px;" />
        </div>
    </div>

    <div class="row">
        <div class="col">
            <hr>
        </div>
    </div>

    <div class="row">
        <div class="col-6">
            <p>
                <strong>Customer:</strong><br>
                {{ $model->customer->full_name.' ('.$model->customer->email.')' }}
            </p>
            @if($model->order_type == 'delivery')
                <div>
                    <strong>Address</strong><br>
                    <address>Address full formatted</address>
                </div>
            @endif
        </div>
        <div class="col-3 text-left">
            <p>
                <strong>Invoice #</strong><br>
                {{ $model->invoice_no }}
            </p>
            <p>
                <strong>Invoice Date</strong><br>
                {{ $model->created_at->format('d M Y') }}<br><br>
            </p>
        </div>
        <div class="col-3 text-right">
            <p>
                <strong>Payment</strong><br>
                $model->payment_type ? $model->payment_method->name
            </p>
            <p>
                <strong>Order Date</strong><br>
                {{ $model->created_at }}
            </p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th class="text-left" width="65%">
                            <b>NAME/OPTIONS</b>
                        </th>
                        <th class="text-left"><b>PRICE</b></th>
                        <th class="text-right"><b>TOTAL</b></th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($model->items() as $menuItem)
                        <tr>
                            <td class="text-left"><b>{{ $menuItem->meal_plan_name }}</b><br />
                                @php $menuItemOptionGroup = $menuItem->options @endphp
                                @if($menuItemOptionGroup->isNotEmpty())
                                    <ul class="list-unstyled">
                                        @foreach($menuItemOptionGroup as $menuItemOptionGroupName => $menuItemOptions)
                                            <li>
                                                <u class="text-muted">{{ $menuItemOptionGroupName }}:</u>
                                                <ul class="list-unstyled">
                                                    @foreach($menuItemOptions as $menuItemOption)
                                                        <li>
                                                            {{ $menuItemOption->order_option_name }}&nbsp;
                                                            @if ($menuItemOption->order_option_price > 0)
                                                                ({{ currency_format($menuItemOption->quantity * $menuItemOption->order_option_price) }})
                                                            @endif
                                                        </li>
                                                    @endforeach
                                                </ul>
                                            </li>
                                        @endforeach
                                    </ul>
                                @endif
                                @if(!empty($model->comment))
                                    <div>
                                        <small><b>{{ $model->comment }}</b></small>
                                    </div>
                                @endif
                            </td>
                            <td class="text-left">{{ currency_format($menuItem->price) }}</td>
                            <td class="text-right">{{ currency_format($menuItem->subtotal) }}</td>
                        </tr>
                    @endforeach
                    </tbody>
                    <tfoot>
                    @foreach($model->totals as $total)
                        @continue($model->isCollectionType() && $total->code == 'delivery')
                        @php $thickLine = ($total->code == 'order_total' || $total->code == 'total') @endphp
                        <tr>
                            <td class="{{ ($loop->iteration === 1 || $thickLine) ? 'thick' : 'no' }}-line" width="1"></td>
                            <td class="{{ ($loop->iteration === 1 || $thickLine) ? 'thick' : 'no' }}-line"></td>
                            <td class="{{ ($loop->iteration === 1 || $thickLine) ? 'thick' : 'no' }}-line text-left">{{ $total->title }}</td>
                            <td class="{{ ($loop->iteration === 1 || $thickLine) ? 'thick' : 'no' }}-line text-right">{{ currency_format($total->value) }}</td>
                        </tr>
                    @endforeach
                    </tfoot>
                </table>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <p class="text-center">Thank you for your order</p>
        </div>
    </div>
</div>
</body>
</html>
