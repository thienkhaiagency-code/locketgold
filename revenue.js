/***********************************************
> Locket RevenueCat Subscriptions — iutdyy Edition
> Intercept: api.revenuecat.com/v1/subscribers/*
***********************************************/

const mapping = { "Locket": ["Gold", "locket_1600_1y"] };
const MEMBER_SINCE_ISO = "2026-02-28T00:00:00Z";
const EXPIRES_ISO      = "9999-12-31T23:59:59Z";
const PRICE_AMOUNT     = 399000.0;
const PRICE_CURRENCY   = "VND";
const TRANSACTION_ID   = "2000001108724193";
const PRODUCT_ID       = "locket_1600_1y";

function safeJson(s) { try { return JSON.parse(s); } catch { return null; } }

const ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
const obj = safeJson($response.body);

if (!obj || typeof obj !== "object" || !obj.subscriber) {
  $done({});
} else {
  const sub = obj.subscriber;
  sub.subscriptions = sub.subscriptions || {};
  sub.entitlements  = sub.entitlements  || {};

  const fakeSubscription = {
    auto_resume_date: null,
    display_name: PRODUCT_ID,
    is_sandbox: true,
    ownership_type: "PURCHASED",
    billing_issues_detected_at: null,
    management_url: "https://apps.apple.com/account/subscriptions",
    period_type: "normal",
    price: { amount: PRICE_AMOUNT, currency: PRICE_CURRENCY },
    expires_date: EXPIRES_ISO,
    grace_period_expires_date: null,
    refunded_at: null,
    unsubscribe_detected_at: null,
    original_purchase_date: MEMBER_SINCE_ISO,
    purchase_date: MEMBER_SINCE_ISO,
    store: "app_store",
    store_transaction_id: TRANSACTION_ID,
  };

  const fakeEntitlement = {
    grace_period_expires_date: null,
    purchase_date: MEMBER_SINCE_ISO,
    product_identifier: PRODUCT_ID,
    expires_date: EXPIRES_ISO,
  };

  const matched = Object.keys(mapping).find(k => ua.includes(k));

  if (matched) {
    const [entitlementName, productId] = mapping[matched];
    const subsKey = productId || PRODUCT_ID;
    sub.subscriptions[subsKey] = { ...fakeSubscription, display_name: subsKey };
    fakeEntitlement.product_identifier = subsKey;
    sub.entitlements[entitlementName] = fakeEntitlement;
  } else {
    sub.subscriptions[PRODUCT_ID] = fakeSubscription;
    sub.entitlements.pro = fakeEntitlement;
  }

  sub.original_app_user_id = sub.original_app_user_id || sub.app_user_id || "";
  sub.first_seen = sub.first_seen || MEMBER_SINCE_ISO;
  sub.last_seen  = sub.last_seen  || new Date().toISOString();
  sub.management_url = "https://apps.apple.com/account/subscriptions";
  
  obj.Attention = `iutdyy — Premium unlocked.`;
  $done({ body: JSON.stringify(obj) });
}
