import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import * as M from '../Models/angel-broking-model';

// Helper to create FormArray from items and a factory
function arr<T>(fb: FormBuilder, items: any[] | undefined, factory: (fb: FormBuilder, it?: any) => FormGroup): FormArray {
  const controls = (items || []).map(i => factory(fb, i));
  return fb.array(controls);
}

export function createAngelTokenForm(fb: FormBuilder, data?: Partial<M.AngelToken>): FormGroup {
  return fb.group({
    jwtToken: [data?.jwtToken ?? ''],
    refreshToken: [data?.refreshToken ?? ''],
    feedToken: [data?.feedToken ?? '']
  });
}

export function createAngelTokenResponseForm(fb: FormBuilder, data?: Partial<M.AngelTokenResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: createAngelTokenForm(fb, data?.data)
  });
}

export function createProfileDataForm(fb: FormBuilder, data?: Partial<M.ProfileData>): FormGroup {
  return fb.group({
    clientcode: [data?.clientcode ?? ''],
    name: [data?.name ?? ''],
    email: [data?.email ?? ''],
    mobileno: [data?.mobileno ?? ''],
    exchanges: fb.array((data?.exchanges || []).map(x => fb.control(x))),
    products: fb.array((data?.products || []).map(x => fb.control(x))),
    lastlogintime: [data?.lastlogintime ?? ''],
    brokerid: [data?.brokerid ?? '']
  });
}

export function createGetProfileResponseForm(fb: FormBuilder, data?: Partial<M.GetProfileResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: createProfileDataForm(fb, data?.data)
  });
}

export function createLogOutResponseForm(fb: FormBuilder, data?: Partial<M.LogOutResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: [data?.data ?? '']
  });
}

export function createRMSLimitDataForm(fb: FormBuilder, data?: Partial<M.RMSLimitData>): FormGroup {
  return fb.group({
    net: [data?.net ?? ''],
    availablecash: [data?.availablecash ?? ''],
    availableintradaypayin: [data?.availableintradaypayin ?? ''],
    availablelimitmargin: [data?.availablelimitmargin ?? ''],
    collateral: [data?.collateral ?? ''],
    m2munrealized: [data?.m2munrealized ?? ''],
    m2mrealized: [data?.m2mrealized ?? ''],
    utiliseddebits: [data?.utiliseddebits ?? ''],
    utilisedspan: [data?.utilisedspan ?? ''],
    utilisedoptionpremium: [data?.utilisedoptionpremium ?? ''],
    utilisedholdingsales: [data?.utilisedholdingsales ?? ''],
    utilisedexposure: [data?.utilisedexposure ?? ''],
    utilisedturnover: [data?.utilisedturnover ?? ''],
    utilisedpayout: [data?.utilisedpayout ?? '']
  });
}

export function createGetRMSLimitResponseForm(fb: FormBuilder, data?: Partial<M.GetRMSLimitResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: createRMSLimitDataForm(fb, data?.data)
  });
}

export function createOrderDataForm(fb: FormBuilder, data?: Partial<M.OrderData>): FormGroup {
  return fb.group({
    script: [data?.script ?? ''],
    orderid: [data?.orderid ?? 0]
  });
}

export function createOrderResponseForm(fb: FormBuilder, data?: Partial<M.OrderResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: createOrderDataForm(fb, data?.data)
  });
}

export function createOrderBookDataForm(fb: FormBuilder, data?: Partial<M.OrderBookData>): FormGroup {
  return fb.group({
    variety: [data?.variety ?? ''],
    ordertype: [data?.ordertype ?? ''],
    producttype: [data?.producttype ?? ''],
    duration: [data?.duration ?? ''],
    price: [data?.price ?? ''],
    triggerprice: [data?.triggerprice ?? ''],
    quantity: [data?.quantity ?? ''],
    disclosedquantity: [data?.disclosedquantity ?? ''],
    squareoff: [data?.squareoff ?? ''],
    stoploss: [data?.stoploss ?? ''],
    trailingstoploss: [data?.trailingstoploss ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    transactiontype: [data?.transactiontype ?? ''],
    exchange: [data?.exchange ?? ''],
    symboltoken: [data?.symboltoken ?? ''],
    instrumenttype: [data?.instrumenttype ?? ''],
    strikeprice: [data?.strikeprice ?? ''],
    optiontype: [data?.optiontype ?? ''],
    expirydate: [data?.expirydate ?? ''],
    lotsize: [data?.lotsize ?? ''],
    cancelsize: [data?.cancelsize ?? ''],
    averageprice: [data?.averageprice ?? ''],
    filledshares: [data?.filledshares ?? ''],
    unfilledshares: [data?.unfilledshares ?? ''],
    orderid: [data?.orderid ?? ''],
    text: [data?.text ?? ''],
    status: [data?.status ?? ''],
    orderstatus: [data?.orderstatus ?? ''],
    updatetime: [data?.updatetime ?? ''],
    exchtime: [data?.exchtime ?? ''],
    exchorderupdatetime: [data?.exchorderupdatetime ?? ''],
    fillid: [data?.fillid ?? ''],
    filltime: [data?.filltime ?? ''],
    parentorderid: [data?.parentorderid ?? '']
  });
}

export function createGetOrderBookResponseForm(fb: FormBuilder, data?: Partial<M.GetOrderBookResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: arr(fb, data?.data as any[] | undefined, createOrderBookDataForm)
  });
}

export function createTradeBookDataForm(fb: FormBuilder, data?: Partial<M.TradeBookData>): FormGroup {
  return fb.group({
    exchange: [data?.exchange ?? ''],
    producttype: [data?.producttype ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    instrumenttype: [data?.instrumenttype ?? ''],
    symbolgroup: [data?.symbolgroup ?? ''],
    strikeprice: [data?.strikeprice ?? ''],
    optiontype: [data?.optiontype ?? ''],
    expirydate: [data?.expirydate ?? ''],
    marketlot: [data?.marketlot ?? ''],
    precision: [data?.precision ?? ''],
    multiplier: [data?.multiplier ?? ''],
    tradevalue: [data?.tradevalue ?? ''],
    transactiontype: [data?.transactiontype ?? ''],
    fillprice: [data?.fillprice ?? ''],
    fillsize: [data?.fillsize ?? ''],
    orderid: [data?.orderid ?? ''],
    fillid: [data?.fillid ?? ''],
    filltime: [data?.filltime ?? '']
  });
}

export function createGetTradeBookResponseForm(fb: FormBuilder, data?: Partial<M.GetTradeBookResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: arr(fb, data?.data as any[] | undefined, createTradeBookDataForm)
  });
}

export function createLastTradedPricesForm(fb: FormBuilder, data?: Partial<M.LastTradedPrices>): FormGroup {
  return fb.group({
    exchange: [data?.exchange ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    symboltoken: [data?.symboltoken ?? ''],
    open: [data?.open ?? ''],
    high: [data?.high ?? ''],
    low: [data?.low ?? ''],
    close: [data?.close ?? ''],
    ltp: [data?.ltp ?? '']
  });
}

export function createGetLTPDataResponseForm(fb: FormBuilder, data?: Partial<M.GetLTPDataResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: createLastTradedPricesForm(fb, data?.data)
  });
}

export function createHoldingDataForm(fb: FormBuilder, data?: Partial<M.HoldingData>): FormGroup {
  return fb.group({
    tradingSymbol: [data?.tradingSymbol ?? ''],
    exchange: [data?.exchange ?? ''],
    isin: [data?.isin ?? ''],
    t1quantity: [data?.t1quantity ?? 0],
    realisedquantity: [data?.realisedquantity ?? 0],
    quantity: [data?.quantity ?? 0],
    authorisedquantity: [data?.authorisedquantity ?? 0],
    profitandloss: [data?.profitandloss ?? 0],
    product: [data?.product ?? ''],
    collateralquantity: [data?.collateralquantity ?? ''],
    collateraltype: [data?.collateraltype ?? ''],
    haircut: [data?.haircut ?? 0],
    averageprice: [data?.averageprice ?? 0],
    ltp: [data?.ltp ?? 0],
    close: [data?.close ?? 0],
    symboltoken: [data?.symboltoken ?? '']
  });
}

export function createGetHoldingResponseForm(fb: FormBuilder, data?: Partial<M.GetHoldingResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: arr(fb, data?.data as any[] | undefined, createHoldingDataForm)
  });
}

export function createPositionDataForm(fb: FormBuilder, data?: Partial<M.PositionData>): FormGroup {
  return fb.group({
    exchange: [data?.exchange ?? ''],
    symboltoken: [data?.symboltoken ?? ''],
    producttype: [data?.producttype ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    symbolname: [data?.symbolname ?? ''],
    instrumenttype: [data?.instrumenttype ?? ''],
    priceden: [data?.priceden ?? ''],
    pricenum: [data?.pricenum ?? ''],
    genden: [data?.genden ?? ''],
    gennum: [data?.gennum ?? ''],
    precision: [data?.precision ?? ''],
    multiplier: [data?.multiplier ?? ''],
    boardlotsize: [data?.boardlotsize ?? ''],
    buyqty: [data?.buyqty ?? ''],
    sellqty: [data?.sellqty ?? ''],
    buyamount: [data?.buyamount ?? ''],
    sellamount: [data?.sellamount ?? ''],
    symbolgroup: [data?.symbolgroup ?? ''],
    strikeprice: [data?.strikeprice ?? ''],
    optiontype: [data?.optiontype ?? ''],
    expirydate: [data?.expirydate ?? ''],
    lotsize: [data?.lotsize ?? ''],
    cfbuyqty: [data?.cfbuyqty ?? ''],
    cfsellqty: [data?.cfsellqty ?? ''],
    cfbuyamount: [data?.cfbuyamount ?? ''],
    cfsellamount: [data?.cfsellamount ?? ''],
    buyavgprice: [data?.buyavgprice ?? ''],
    sellavgprice: [data?.sellavgprice ?? ''],
    avgnetprice: [data?.avgnetprice ?? ''],
    netvalue: [data?.netvalue ?? ''],
    netqty: [data?.netqty ?? ''],
    totalbuyvalue: [data?.totalbuyvalue ?? ''],
    totalsellvalue: [data?.totalsellvalue ?? ''],
    cfbuyavgprice: [data?.cfbuyavgprice ?? ''],
    cfsellavgprice: [data?.cfsellavgprice ?? ''],
    totalbuyavgprice: [data?.totalbuyavgprice ?? ''],
    totalsellavgprice: [data?.totalsellavgprice ?? ''],
    netprice: [data?.netprice ?? '']
  });
}

export function createGetPositionResponseForm(fb: FormBuilder, data?: Partial<M.GetPositionResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: arr(fb, data?.data as any[] | undefined, createPositionDataForm)
  });
}

export function createPositionConversionResponseForm(fb: FormBuilder, data?: Partial<M.PositionConversionResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: [data?.data ?? null]
  });
}

export function createRuleDataForm(fb: FormBuilder, data?: Partial<M.RuleData>): FormGroup {
  return fb.group({ id: [data?.id ?? 0] });
}

export function createRuleResponseForm(fb: FormBuilder, data?: Partial<M.RuleResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: createRuleDataForm(fb, data?.data)
  });
}

export function createRuleDetailForm(fb: FormBuilder, data?: Partial<M.RuleDetail>): FormGroup {
  return fb.group({
    status: [data?.status ?? ''],
    createddate: [data?.createddate ?? ''],
    updateddate: [data?.updateddate ?? ''],
    expirydate: [data?.expirydate ?? ''],
    clientid: [data?.clientid ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    symboltoken: [data?.symboltoken ?? ''],
    exchange: [data?.exchange ?? ''],
    producttype: [data?.producttype ?? ''],
    transactiontype: [data?.transactiontype ?? ''],
    price: [data?.price ?? 0],
    qty: [data?.qty ?? 0],
    triggerprice: [data?.triggerprice ?? 0],
    disclosedqty: [data?.disclosedqty ?? 0]
  });
}

export function createRuleListResponseForm(fb: FormBuilder, data?: Partial<M.RuleListResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: arr(fb, data?.data as any[] | undefined, createRuleDetailForm)
  });
}

export function createRuleDetailsResponseForm(fb: FormBuilder, data?: Partial<M.RuleDetailsResponse>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: createRuleDetailForm(fb, data?.data)
  });
}

export function createCandleDataResponseForm(fb: FormBuilder, data?: Partial<M.CandleDataResponse>): FormGroup {
  // data is List<List<object>> -> represent as FormArray of FormArray of controls
  const outer = (data?.data || []).map(inner => fb.array((inner || []).map(v => fb.control(v))));
  return fb.group({
    status: [data?.status ?? false],
    message: [data?.message ?? ''],
    errorcode: [data?.errorcode ?? ''],
    data: fb.array(outer)
  });
}

export function createOutputBaseClassForm(fb: FormBuilder, data?: Partial<M.OutputBaseClass>): FormGroup {
  return fb.group({
    status: [data?.status ?? false],
    http_code: [data?.http_code ?? ''],
    http_error: [data?.http_error ?? ''],
    TokenResponse: createAngelTokenForm(fb, data?.TokenResponse as any),
    GetProfileResponse: createGetProfileResponseForm(fb, data?.GetProfileResponse as any),
    LogOutResponse: createLogOutResponseForm(fb, data?.LogOutResponse as any),
    GetRMSLimitResponse: createGetRMSLimitResponseForm(fb, data?.GetRMSLimitResponse as any),
    PlaceOrderResponse: createOrderResponseForm(fb, data?.PlaceOrderResponse as any),
    ModifyOrderResponse: createOrderResponseForm(fb, data?.ModifyOrderResponse as any),
    CancelOrderResponse: createOrderResponseForm(fb, data?.CancelOrderResponse as any),
    GetOrderBookResponse: createGetOrderBookResponseForm(fb, data?.GetOrderBookResponse as any),
    GetTradeBookResponse: createGetTradeBookResponseForm(fb, data?.GetTradeBookResponse as any),
    GetLTPDataResponse: createGetLTPDataResponseForm(fb, data?.GetLTPDataResponse as any),
    GetHoldingResponse: createGetHoldingResponseForm(fb, data?.GetHoldingResponse as any),
    GetPositionResponse: createGetPositionResponseForm(fb, data?.GetPositionResponse as any),
    PositionConversionResponse: createPositionConversionResponseForm(fb, data?.PositionConversionResponse as any),
    CreateRuleResponse: createRuleResponseForm(fb, data?.CreateRuleResponse as any),
    ModifyRuleResponse: createRuleResponseForm(fb, data?.ModifyRuleResponse as any),
    CancelRuleResponse: createRuleResponseForm(fb, data?.CancelRuleResponse as any),
    RuleDetailsResponse: createRuleDetailsResponseForm(fb, data?.RuleDetailsResponse as any),
    RuleListResponse: createRuleListResponseForm(fb, data?.RuleListResponse as any),
    GetCandleDataResponse: createCandleDataResponseForm(fb, data?.GetCandleDataResponse as any)
  });
}

// Input classes
export function createOrderInfoForm(fb: FormBuilder, data?: Partial<M.OrderInfo>): FormGroup {
  return fb.group({
    orderid: [data?.orderid ?? ''],
    variety: [data?.variety ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    symboltoken: [data?.symboltoken ?? ''],
    transactiontype: [data?.transactiontype ?? ''],
    exchange: [data?.exchange ?? ''],
    ordertype: [data?.ordertype ?? ''],
    producttype: [data?.producttype ?? ''],
    duration: [data?.duration ?? ''],
    price: [data?.price ?? ''],
    squareoff: [data?.squareoff ?? ''],
    stoploss: [data?.stoploss ?? ''],
    quantity: [data?.quantity ?? ''],
    triggerprice: [data?.triggerprice ?? ''],
    trailingStopLoss: [data?.trailingStopLoss ?? ''],
    disclosedquantity: [data?.disclosedquantity ?? ''],
    ordertag: [data?.ordertag ?? '']
  });
}

export function createConvertPositionRequestForm(fb: FormBuilder, data?: Partial<M.ConvertPositionRequest>): FormGroup {
  return fb.group({
    exchange: [data?.exchange ?? ''],
    oldproducttype: [data?.oldproducttype ?? ''],
    newproducttype: [data?.newproducttype ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    transactiontype: [data?.transactiontype ?? ''],
    quantity: [data?.quantity ?? 0],
    type: [data?.type ?? '']
  });
}

export function createCreateRuleRequestForm(fb: FormBuilder, data?: Partial<M.CreateRuleRequest>): FormGroup {
  return fb.group({
    id: [data?.id ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? ''],
    symboltoken: [data?.symboltoken ?? ''],
    exchange: [data?.exchange ?? ''],
    transactiontype: [data?.transactiontype ?? ''],
    producttype: [data?.producttype ?? ''],
    price: [data?.price ?? ''],
    qty: [data?.qty ?? ''],
    triggerprice: [data?.triggerprice ?? ''],
    disclosedqty: [data?.disclosedqty ?? ''],
    timeperiod: [data?.timeperiod ?? '']
  });
}

export function createCancelRuleRequestForm(fb: FormBuilder, data?: Partial<M.CancelRuleRequest>): FormGroup {
  return fb.group({
    id: [data?.id ?? ''],
    symboltoken: [data?.symboltoken ?? ''],
    exchange: [data?.exchange ?? '']
  });
}

export function createRuleListRequestForm(fb: FormBuilder, data?: Partial<M.RuleListRequest>): FormGroup {
  return fb.group({
    status: fb.array((data?.status || []).map(s => fb.control(s))),
    page: [data?.page ?? 0],
    count: [data?.count ?? 0]
  });
}

export function createCandleRequestForm(fb: FormBuilder, data?: Partial<M.CandleRequest>): FormGroup {
  return fb.group({
    symboltoken: [data?.symboltoken ?? ''],
    exchange: [data?.exchange ?? ''],
    interval: [data?.interval ?? ''],
    fromdate: [data?.fromdate ?? ''],
    todate: [data?.todate ?? '']
  });
}

export function createLTPDataRequestForm(fb: FormBuilder, data?: Partial<M.LTPDataRequest>): FormGroup {
  return fb.group({
    symboltoken: [data?.symboltoken ?? ''],
    exchange: [data?.exchange ?? ''],
    tradingsymbol: [data?.tradingsymbol ?? '']
  });
}

export function createHistoricalDataStockForm(fb: FormBuilder, data?: Partial<M.HistoricalDataStock>): FormGroup {
  return fb.group({
    Date: [data?.Date ?? ''],
    Open: [data?.Open ?? null],
    High: [data?.High ?? null],
    Low: [data?.Low ?? null],
    Close: [data?.Close ?? null],
    Volume: [data?.Volume ?? null],
    Change: [data?.Change ?? null],
    ChangeDiff: [data?.ChangeDiff ?? null]
  });
}

export function createStockParamsForm(fb: FormBuilder, data?: Partial<M.StockParams>): FormGroup {
  return fb.group({
    token: [data?.token ?? ''],
    symbol: [data?.symbol ?? ''],
    name: [data?.name ?? ''],
    expiry: [data?.expiry ?? ''],
    strike: [data?.strike ?? ''],
    lotsize: [data?.lotsize ?? ''],
    instrumenttype: [data?.instrumenttype ?? ''],
    exch_seg: [data?.exch_seg ?? ''],
    tick_size: [data?.tick_size ?? '']
  });
}
