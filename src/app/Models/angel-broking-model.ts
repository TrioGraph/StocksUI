// Generated from AngelBrokingModel.cs
// TypeScript classes mirroring the C# models. Constructors accept Partial<T> for easy hydration.

export class AngelToken {
  jwtToken!: string;
  refreshToken!: string;
  feedToken!: string;

  constructor(init?: Partial<AngelToken>) { Object.assign(this, init); }
}

export class AngelTokenResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: AngelToken;

  constructor(init?: Partial<AngelTokenResponse>) { Object.assign(this, init); }
}

export class ProfileData {
  clientcode!: string;
  name!: string;
  email!: string;
  mobileno!: string;
  exchanges!: string[];
  products!: string[];
  lastlogintime!: string;
  brokerid!: string;

  constructor(init?: Partial<ProfileData>) { Object.assign(this, init); }
}

export class GetProfileResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: ProfileData;

  constructor(init?: Partial<GetProfileResponse>) { Object.assign(this, init); }
}

export class LogOutResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: string;

  constructor(init?: Partial<LogOutResponse>) { Object.assign(this, init); }
}

export class RMSLimitData {
  net!: string;
  availablecash!: string;
  availableintradaypayin!: string;
  availablelimitmargin!: string;
  collateral!: string;
  m2munrealized!: string;
  m2mrealized!: string;
  utiliseddebits!: string;
  utilisedspan!: string;
  utilisedoptionpremium!: string;
  utilisedholdingsales!: string;
  utilisedexposure!: string;
  utilisedturnover!: string;
  utilisedpayout!: string;

  constructor(init?: Partial<RMSLimitData>) { Object.assign(this, init); }
}

export class GetRMSLimitResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: RMSLimitData;

  constructor(init?: Partial<GetRMSLimitResponse>) { Object.assign(this, init); }
}

export class OrderData {
  script!: string;
  orderid!: number;

  constructor(init?: Partial<OrderData>) { Object.assign(this, init); }
}

export class OrderResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: OrderData;

  constructor(init?: Partial<OrderResponse>) { Object.assign(this, init); }
}

export class OrderBookData {
  variety!: string;
  ordertype!: string;
  producttype!: string;
  duration!: string;
  price!: string;
  triggerprice!: string;
  quantity!: string;
  disclosedquantity!: string;
  squareoff!: string;
  stoploss!: string;
  trailingstoploss!: string;
  tradingsymbol!: string;
  transactiontype!: string;
  exchange!: string;
  symboltoken!: string;
  instrumenttype!: string;
  strikeprice!: string;
  optiontype!: string;
  expirydate!: string;
  lotsize!: string;
  cancelsize!: string;
  averageprice!: string;
  filledshares!: string;
  unfilledshares!: string;
  orderid!: string;
  text!: string;
  status!: string;
  orderstatus!: string;
  updatetime!: string;
  exchtime!: string;
  exchorderupdatetime!: string;
  fillid!: string;
  filltime!: string;
  parentorderid!: string;

  constructor(init?: Partial<OrderBookData>) { Object.assign(this, init); }
}

export class GetOrderBookResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: OrderBookData[];

  constructor(init?: Partial<GetOrderBookResponse>) { Object.assign(this, init); }
}

export class TradeBookData {
  exchange!: string;
  producttype!: string;
  tradingsymbol!: string;
  instrumenttype!: string;
  symbolgroup!: string;
  strikeprice!: string;
  optiontype!: string;
  expirydate!: string;
  marketlot!: string;
  precision!: string;
  multiplier!: string;
  tradevalue!: string;
  transactiontype!: string;
  fillprice!: string;
  fillsize!: string;
  orderid!: string;
  fillid!: string;
  filltime!: string;

  constructor(init?: Partial<TradeBookData>) { Object.assign(this, init); }
}

export class GetTradeBookResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: TradeBookData[];

  constructor(init?: Partial<GetTradeBookResponse>) { Object.assign(this, init); }
}

export class LastTradedPrices {
  exchange!: string;
  tradingsymbol!: string;
  symboltoken!: string;
  open!: string;
  high!: string;
  low!: string;
  close!: string;
  ltp!: string;

  constructor(init?: Partial<LastTradedPrices>) { Object.assign(this, init); }
}

export class GetLTPDataResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: LastTradedPrices;

  constructor(init?: Partial<GetLTPDataResponse>) { Object.assign(this, init); }
}

export class HoldingData {
  tradingSymbol!: string;
  exchange!: string;
  isin!: string;
  t1quantity!: number;
  realisedquantity!: number;
  quantity!: number;
  authorisedquantity!: number;
  profitandloss!: number;
  product!: string;
  collateralquantity!: string;
  collateraltype!: string;
  haircut!: number;
  averageprice!: number;
  ltp!: number;
  close!: number;
  symboltoken!: string;

  constructor(init?: Partial<HoldingData>) { Object.assign(this, init); }
}

export class GetHoldingResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: HoldingData[];

  constructor(init?: Partial<GetHoldingResponse>) { Object.assign(this, init); }
}

export class PositionData {
  exchange!: string;
  symboltoken!: string;
  producttype!: string;
  tradingsymbol!: string;
  symbolname!: string;
  instrumenttype!: string;
  priceden!: string;
  pricenum!: string;
  genden!: string;
  gennum!: string;
  precision!: string;
  multiplier!: string;
  boardlotsize!: string;
  buyqty!: string;
  sellqty!: string;
  buyamount!: string;
  sellamount!: string;
  symbolgroup!: string;
  strikeprice!: string;
  optiontype!: string;
  expirydate!: string;
  lotsize!: string;
  cfbuyqty!: string;
  cfsellqty!: string;
  cfbuyamount!: string;
  cfsellamount!: string;
  buyavgprice!: string;
  sellavgprice!: string;
  avgnetprice!: string;
  netvalue!: string;
  netqty!: string;
  totalbuyvalue!: string;
  totalsellvalue!: string;
  cfbuyavgprice!: string;
  cfsellavgprice!: string;
  totalbuyavgprice!: string;
  totalsellavgprice!: string;
  netprice!: string;

  constructor(init?: Partial<PositionData>) { Object.assign(this, init); }
}

export class GetPositionResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: PositionData[];

  constructor(init?: Partial<GetPositionResponse>) { Object.assign(this, init); }
}

export class PositionConversionResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: any;

  constructor(init?: Partial<PositionConversionResponse>) { Object.assign(this, init); }
}

export class RuleData {
  id!: number;

  constructor(init?: Partial<RuleData>) { Object.assign(this, init); }
}

export class RuleResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: RuleData;

  constructor(init?: Partial<RuleResponse>) { Object.assign(this, init); }
}

export class RuleDetail {
  status!: string;
  createddate!: string; // DateTime -> string
  updateddate!: string;
  expirydate!: string;
  clientid!: string;
  tradingsymbol!: string;
  symboltoken!: string;
  exchange!: string;
  producttype!: string;
  transactiontype!: string;
  price!: number;
  qty!: number;
  triggerprice!: number;
  disclosedqty!: number;

  constructor(init?: Partial<RuleDetail>) { Object.assign(this, init); }
}

export class RuleListResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: RuleDetail[];

  constructor(init?: Partial<RuleListResponse>) { Object.assign(this, init); }
}

export class RuleDetailsResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: RuleDetail;

  constructor(init?: Partial<RuleDetailsResponse>) { Object.assign(this, init); }
}

export class CandleDataResponse {
  status!: boolean;
  message!: string;
  errorcode!: string;
  data!: any[][];

  constructor(init?: Partial<CandleDataResponse>) { Object.assign(this, init); }
}

export class OutputBaseClass {
  status!: boolean;
  http_code!: string;
  http_error!: string;
  TokenResponse?: AngelToken;
  GetProfileResponse?: GetProfileResponse;
  LogOutResponse?: LogOutResponse;
  GetRMSLimitResponse?: GetRMSLimitResponse;
  PlaceOrderResponse?: OrderResponse;
  ModifyOrderResponse?: OrderResponse;
  CancelOrderResponse?: OrderResponse;
  GetOrderBookResponse?: GetOrderBookResponse;
  GetTradeBookResponse?: GetTradeBookResponse;
  GetLTPDataResponse?: GetLTPDataResponse;
  GetHoldingResponse?: GetHoldingResponse;
  GetPositionResponse?: GetPositionResponse;
  PositionConversionResponse?: PositionConversionResponse;
  CreateRuleResponse?: RuleResponse;
  ModifyRuleResponse?: RuleResponse;
  CancelRuleResponse?: RuleResponse;
  RuleDetailsResponse?: RuleDetailsResponse;
  RuleListResponse?: RuleListResponse;
  GetCandleDataResponse?: CandleDataResponse;

  constructor(init?: Partial<OutputBaseClass>) { Object.assign(this, init); }
}

// Input classes
export class OrderInfo {
  orderid!: string;
  variety!: string;
  tradingsymbol!: string;
  symboltoken!: string;
  transactiontype!: string;
  exchange!: string;
  ordertype!: string;
  producttype!: string;
  duration!: string;
  price!: string;
  squareoff!: string;
  stoploss!: string;
  quantity!: string;
  triggerprice!: string;
  trailingStopLoss!: string;
  disclosedquantity!: string;
  ordertag!: string;

  constructor(init?: Partial<OrderInfo>) { Object.assign(this, init); }
}

export class ConvertPositionRequest {
  exchange!: string;
  oldproducttype!: string;
  newproducttype!: string;
  tradingsymbol!: string;
  transactiontype!: string;
  quantity!: number;
  type!: string;

  constructor(init?: Partial<ConvertPositionRequest>) { Object.assign(this, init); }
}

export class CreateRuleRequest {
  id!: string;
  tradingsymbol!: string;
  symboltoken!: string;
  exchange!: string;
  transactiontype!: string;
  producttype!: string;
  price!: string;
  qty!: string;
  triggerprice!: string;
  disclosedqty!: string;
  timeperiod!: string;

  constructor(init?: Partial<CreateRuleRequest>) { Object.assign(this, init); }
}

export class CancelRuleRequest {
  id!: string;
  symboltoken!: string;
  exchange!: string;

  constructor(init?: Partial<CancelRuleRequest>) { Object.assign(this, init); }
}

export class RuleListRequest {
  status!: string[];
  page!: number;
  count!: number;

  constructor(init?: Partial<RuleListRequest>) { Object.assign(this, init); }
}

export class CandleRequest {
  symboltoken!: string;
  exchange!: string;
  interval!: string;
  fromdate!: string;
  todate!: string;

  constructor(init?: Partial<CandleRequest>) { Object.assign(this, init); }
}

export class LTPDataRequest {
  symboltoken!: string;
  exchange!: string;
  tradingsymbol!: string;

  constructor(init?: Partial<LTPDataRequest>) { Object.assign(this, init); }
}

export class HistoricalDataStock {
  Date!: string;
  Open!: number | null;
  High!: number | null;
  Low!: number | null;
  Close!: number | null;
  Volume!: number | null;
  Change!: number | null;
  ChangeDiff!: number | null;

  constructor(init?: Partial<HistoricalDataStock>) { Object.assign(this, init); }
}

export class StockParams {
  token!: string;
  symbol!: string;
  name!: string;
  expiry!: string;
  strike!: string;
  lotsize!: string;
  instrumenttype!: string;
  exch_seg!: string;
  tick_size!: string;

  constructor(init?: Partial<StockParams>) { Object.assign(this, init); }

  get DisplayData(): string {
    return `${this.symbol} - ${this.name} - ${this.exch_seg}`;
  }
}
