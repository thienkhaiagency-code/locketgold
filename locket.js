// ============================================================
// Locket Gold Unlocker — iutdyy Edition (All-in-One)
// Intercept: firebaseremoteconfig.googleapis.com
// Intercept: api.revenuecat.com
// Author: iutdyy | Member since: 28/02/2026
// ============================================================

const MEMBER_SINCE = "28/02/2026";

function safeJson(s, fb) { try { return JSON.parse(s); } catch { return fb; } }

function deepMerge(base, patch) {
  for (const k of Object.keys(patch)) {
    const v = patch[k];
    if (v && typeof v === "object" && !Array.isArray(v)
        && base[k] && typeof base[k] === "object" && !Array.isArray(base[k])) {
      deepMerge(base[k], v);
    } else {
      base[k] = v;
    }
  }
  return base;
}

function setJsonString(e, k, patch) {
  e[k] = JSON.stringify(deepMerge(safeJson(e[k] || "{}", {}), patch));
}
function setStr(e, k, v) { e[k] = String(v); }

// ==================== FAKE SUBSCRIPTION DATA ====================
const fakeSub = {
  auto_resume_date: null,
  display_name: "locket_1600_1y",
  is_sandbox: true,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  management_url: "https://apps.apple.com/account/subscriptions",
  period_type: "normal",
  price: { amount: 399000.0, currency: "VND" },
  expires_date: "9999-12-31T23:59:59Z",
  grace_period_expires_date: null,
  refunded_at: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2026-02-28T00:00:00Z",
  purchase_date: "2026-02-28T00:00:00Z",
  store: "app_store",
  store_transaction_id: "2000001108724193",
};

const fakeEnt = {
  grace_period_expires_date: null,
  purchase_date: "2026-02-28T00:00:00Z",
  product_identifier: "locket_1600_1y",
  expires_date: "9999-12-31T23:59:59Z",
};

// ==================== CONFIG BLOCKS ====================
const FEATURE_GATES = {
  app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled",
  locket_views: "enabled", long_captions: "enabled", longer_video: "enabled",
  unlimited_friends: "enabled", priority_support: "enabled", profile_badge: "enabled",
  remove_ads: "enabled", video: "enabled", custom_widget_frames: "enabled",
  streak_recovery: "enabled",
};

const UPSELL = {
  app_icon_picker: true, camera_roll: true, camera_theme: true,
  locket_views: true, remove_ads: true, custom_widget_frames: true,
};

const PAYWALL = { uid: "paywall_iutdyy", onboarding: false, after_sent_moment: false, on_foreground: false };

const ADS_OFF = {
  history_ads_mode: "off", history_ads_prefetch_count: "0",
  history_ads_prefetch_immediate: "false", history_ads_prefetch_reroute: "false",
  history_ads_dynamic_insertion: "false", history_ads_refresh_prefetch_on_foreground: "false",
  history_ads_floor_price: "0", history_ads_floor_price_att: "0",
  history_ad_log_displayed_on_background: "false", history_ads_debug_menu: "false",
  sentry_sample_rate: "0", sentry_network_tracing: "false",
  sentry_performance_tracking: "false", sentry_trace_sample_rate: "0",
  sentry_profiles_sample_rate: "0",
};

const CAMERA = {
  gold_max_duration: 45.0, goldMaxDuration: 45.0, max_duration: 45.0, maxDuration: 45.0,
  ultra_wide: true, ultraWide: true, volume_button: true, volumeButton: true,
  flash_button: true, telephoto: true, srgb: true, lanczos: true,
  quality_mbps: 0.6, qualityMbps: 0.6,
};

const CAMERA_ROLL = {
  gold_max_duration: 30.0, goldMaxDuration: 30.0, video_max_duration: 30.0, videoMaxDuration: 30.0,
  max_duration: 30.0, maxDuration: 30.0, trim_max_duration: 30.0, trimMaxDuration: 30.0,
  camera_roll_max_duration: 30.0, quality_mbps: 0.6, qualityMbps: 0.6, flash_button: true,
};

const LIVE_PHOTOS = { capture: true, viewing: true, catch_up: true, widget_looping_mode: "never" };

const CAMERA_FILTER = {
  allows_custom_filters: true, show_filter_button: true, sheet_enabled: true, open_sheet_immediately: true,
  sheet_filters: [
    { title: { en: "Goofy" },     filter_ids: ["okay_wig","influencer","looks_maxxing","toothless","bye_brows"] },
    { title: { en: "Looks" },     filter_ids: ["bowling_ball","blonde_bleached","beard","bob_cut","buns","tatted","mohawk","braces","bye_brows"] },
    { title: { en: "Celebrate" }, filter_ids: ["slimed","princess","disco_lights","cash_money","happy_birthday"] },
    { title: { en: "Cute" },      filter_ids: ["cutesy","sticker_face","flower_crown","love_bug"] },
    { title: { en: "Costumes" },  filter_ids: ["wedding","cowboy_cowgirl","giraffe","clown"] },
    { title: { en: "Holidays" },  filter_ids: ["easter_bunney_cutout","easter_chick_cutout","bearded","leprechaun","lucky_face","sweet_hearts","elf_cutout","santa_cutout","frosty"] },
  ],
  picker_filters: [
    "okay_wig","influencer","looks_maxxing","toothless","bye_brows",
    "bowling_ball","blonde_bleached","beard","bob_cut","buns",
    "tatted","mohawk","braces","slimed","princess",
    "disco_lights","cash_money","happy_birthday","cutesy","sticker_face",
    "flower_crown","love_bug","wedding","cowboy_cowgirl","giraffe",
    "clown","easter_bunney_cutout","easter_chick_cutout","bearded","leprechaun",
    "lucky_face","sweet_hearts","elf_cutout","santa_cutout","frosty",
  ],
};

const CAMERA_TOGGLES = {
  camera_roll_preview_enabled: "true", camera_roll_video_enabled: "true", camera_roll_video_upload_enabled: "true",
  internal_camera_roll_video_upload_enabled: "true", longer_camera_roll_videos_enabled: "true",
  video_sound_enabled: "true", microphone_enabled: "true", camera_microphone_enabled: "true",
  audio_session_deactivation_enabled: "true", zoom_enabled: "true",
  upload_main: "false", upload_main_image_quality: "0.6", upload_main_image_size: "1440",
  upload_thumbnail_image_quality: "0.8", upload_thumbnail_image_size: "1020",
};

const FRIEND_LIMITS = {
  max_friends_count: "999999", friend_limit_mode: "0", soft_friend_limit_threshold_count: "999999",
  show_friend_limit_on_cam: "false", signup_max_friends_count: "999999", celebrity_inbox_limit: "999999",
  friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
  friends_sheet_locket_count_config: JSON.stringify({ items: [{ threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 100, emoji: "💛" }, { threshold: 1000, emoji: "🌟🌟" }] }),
  friend_locket_count_config: JSON.stringify({ items: [{ threshold: 0, icon_name: "heart" }, { threshold: 1, icon_name: "heart.fill" }, { threshold: 100, emoji: "💛" }, { threshold: 1000, emoji: "✨💗✨" }] }),
  new_friends_monitoring_enabled: "true", improved_friend_suggestions: "true", show_friend_suggestions_by_default: "true",
  emoji_friend_suggestions: "true", prompt_contact_permissions_on_search: "true", populate_phone_numbers_from_suggest_friends: "true",
  hide_friends_enabled: "true", hide_invite_links: "false", hide_skip_contacts: "true", show_all_contacts: "true",
  show_invite_suggestions: "true", show_no_friends_bottom_sheet: "false", signup_allow_skip_add_friends: "true",
};

const MOMENTS_CHAT = {
  moment_views_enabled: "true", moment_views_v2: "true", record_moment_views: "true", notify_moment_views: "true",
  get_moment_views_as_cloud_function: "true", moment_reactions_v2: "true", chat_reactions_enabled: "true",
  conversation_reactions: "true", typing_indicators_enabled: "true", unsend_message_enabled: "true",
  reply_prototype_enabled: "true", messages_integration: "true", conversations_enabled: "true",
  fetch_moments_in_conversation: "true", hide_chat_button: "false", groups_enabled: "true",
  send_to_self_only_mode: "always_enabled", time_travel_rewind_v2_enabled: "true", calendar_delete_moment_enabled: "true",
  calendar_rewind_enabled: "false", locket_yearbook_story_sharing_encouraged: "true", rollcall_enabled: "true",
  rollcall_comment_actions: "true", rollcall_profile_button: "true", rollcall_prompt_export_after_share: "true",
  rollcall_confirm_skip_tagging: "false", rollcall_tap_to_tag_enabled: "false",
};

const UI_WIDGET = {
  widget_frame_event_max_images: "5", android_widget_frame_event_enabled: "true", widget_badge_enabled: "true",
  widget_badge_v2: "true", widget_stale_state_enabled: "false", widget_last_sent_indicator: "false",
  widget_sync_token_reload_mode: "clearTokenNever", live_activity_onboarding: "true",
  live_activity_onboarding_variant: "friending", register_live_activity_push_to_start_token: "true",
  live_activity_remove_stale_start_token: "true", notification_preferences_live_activities: "true",
  notification_preferences: "true", notification_reply_body_visible: "true", prompt_notification_permissions_after_friending: "true",
  activity_bar_enabled: "true", journal_activity_bar_enabled: "true",
  qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
  custom_profile_pics: "true", profile_menu_v2_enabled: "true",
};

const SYSTEM_CACHE = {
  cdn_domain_replacements: JSON.stringify({ "firebasestorage.googleapis.com": "cdn.locketcamera.com" }),
  cdn_domain_replacements_video: "true", storage_bucket: "gs://locket-img", storage_bucket_video: "gs://locket-video",
  image_cache_max_age_sec: "157680000", image_cache_max_size: "400000000", history_cache_age_days: "1000",
  user_cache_max_age_sec: "691200", friends_cache_max_age_sec: "2592000", image_fetch_cache: "true",
  image_cache_use_shared: "true", use_doc_dir_for_image_cache: "true", efficient_history_cache_invalidation: "true",
  timestamp_based_history_fetches: "true", get_latest_moment_v2: "true", fetch_users_from_cloud_function: "true",
  refresh_interval: "60", firestore_refresh_v2: "true", firestore_refresh_v3: "true", keychain_access_retries: "true",
  blocked_users_cached_sync_enabled: "true", beta_features_enabled: "true", join_testflight_enabled: "true",
  safety_center: "true", help_center: "true", support_v2: "true", privacy_choices_setting: "true",
  request_att_permission: "true", invite_link_preview_variant: "4",
  share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
  share_history_prompt_enabled: "false", use_thumbnails_for_sharing: "true", use_thumbnails_in_timeline: "true",
  persist_onboarding_step: "true", onboarding_contact_permission_step: "true",
};

const OVERLAY = {
  overlay_navigator_enabled: "true", overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
  captions_enabled: "true", music_caption_enabled: "true", music_caption_song_preview_enabled: "true",
  link_caption_link_enabled: "true", overlay_dynamic_captions: JSON.stringify([
    "standard","poll","color_palette","review","music","location","weather","time","streak","star_sign","party_time","locket_count","good_morning","goodnight","ootd","miss_you","custom","halloween_2026"
  ]),
};

const OVERLAY_ITEMS = [
  {
    section: "🎨 iutdyy",
    items: [
      { overlay_id: "caption:iutdyy_member", source: "remote", caption: { background: { colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] }, icon: { data: "📅", type: "emoji" }, max_lines: 1, text: `Thành viên từ ${MEMBER_SINCE}`, localized_text: { en: `Member since ${MEMBER_SINCE}`, vn: `Thành viên từ ${MEMBER_SINCE}` }, text_color: "#183153", type: "static_content" } },
      { overlay_id: "caption:iutdyy",        source: "remote", caption: { background: { colors: ["#B8E7FF", "#A8F5D0", "#DCCBFF"] }, max_lines: 1, text: "💻 iutdyy", text_color: "#183153", type: "static_content" } },
    ]
  },
  {
    section: "🎨 General",
    items: [
      { overlay_id: "caption:standard",      source: "local", caption: { type: "standard" } },
      { overlay_id: "caption:review",        source: "local", caption: { type: "review" } },
      { overlay_id: "caption:music",         source: "local", caption: { type: "music" } },
      { overlay_id: "caption:location",      source: "local", caption: { type: "location" } },
      { overlay_id: "caption:weather",       source: "local", caption: { type: "weather" } },
      { overlay_id: "caption:time",          source: "local", caption: { type: "time" } },
      { overlay_id: "caption:streak",        source: "local", caption: { type: "streak" } },
      { overlay_id: "caption:star_sign",     source: "local", caption: { type: "star_sign" } },
      { overlay_id: "caption:poll",          source: "local", caption: { type: "poll" } },
      { overlay_id: "caption:color_palette", source: "local", caption: { type: "color_palette" } },
      { overlay_id: "caption:locket_count",  source: "local", caption: { type: "locket_count" } },
    ]
  },
  {
    section: "🎨 Holiday Caption",
    items: [
      { overlay_id: "caption:halloween_2026", source: "remote", caption: { background: { colors: ["#150804", "#C8540D"] }, icon: { data: "🎃", type: "emoji" }, max_lines: 1, text: "Halloween", localized_text: { en: "Halloween", vn: "Halloween" }, text_color: "#FFB182", type: "static_content" } },
      { overlay_id: "caption:autumn_2026",    source: "remote", caption: { background: { colors: ["#FFE0A0", "#F6A53A"] }, icon: { data: "🍂", type: "emoji" }, max_lines: 1, text: "Xin chào Mùa Thu", localized_text: { en: "Xin chào Mùa Thu", vn: "Xin chào Mùa Thu" }, text_color: "#FFFFFF", type: "static_content" } },
      { overlay_id: "caption:christmas_eve_2026", source: "remote", caption: { background: { colors: ["#2FA85F", "#176B3A"] }, icon: { data: "🕯️", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
      { overlay_id: "caption:christmas_day_2026", source: "remote", caption: { background: { colors: ["#E53935", "#A81818"] }, icon: { data: "🎄", type: "emoji" }, max_lines: 1, text: "Giáng sinh an lành", localized_text: { en: "Giáng sinh an lành", vn: "Giáng sinh an lành" }, text_color: "#FFFFFF", type: "static_content" } },
      { overlay_id: "caption:new_years_eve_2026", source: "remote", caption: { background: { colors: ["#FFC64B", "#FFEDBF"] }, icon: { data: "🥂", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#643F00", type: "static_content" } },
      { overlay_id: "caption:new_years_day_2027", source: "remote", caption: { background: { colors: ["#3B00EC", "#823FFF"] }, icon: { data: "💫", type: "emoji" }, max_lines: 1, text: "Xin chào 2027!", localized_text: { en: "Xin chào 2027!", vn: "Xin chào 2027!" }, text_color: "#FFFFFF", type: "static_content" } },
      { overlay_id: "caption:new_years_day_2027_alternate", source: "remote", caption: { background: { colors: ["#FF0062", "#FF783F"] }, max_lines: 1, text: "2027", text_color: "#FFFFFF", type: "static_content" } },
    ]
  },
  {
    section: "🎨 Decorative by iutdyy",
    items: [
      { overlay_id: "caption:cu",       source: "remote", caption: { background: { colors: ["#FFD6A5", "#FFF1A8", "#FFC4D6"] }, max_lines: 1, text: "Cu 🐎", text_color: "#633B24", type: "static_content" } },
      { overlay_id: "caption:tuat",     source: "remote", caption: { background: { colors: ["#2C1A0E", "#5D4037", "#D7A86E"] }, icon: { data: "🐕", type: "emoji" }, max_lines: 1, text: "Tuất", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:snake_vibes", source: "remote", caption: { background: { colors: ["#2E7D32", "#66BB6A"] }, icon: { data: "🐍", type: "emoji" }, max_lines: 1, text: "Snake Vibes", localized_text: { en: "Snake Vibes", vn: "Chất rắn" }, text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:du_an_ma", source: "remote", caption: { background: { colors: ["#263238", "#455A64"] }, icon: { data: "👻", type: "emoji" }, max_lines: 1, text: "dự án ma", text_color: "#FFFFFFE6", type: "static_content" } },
    ]
  },
  {
    section: "🎨 Tình yêu & Cơm chó 💕",
    items: [
      { overlay_id: "caption:toi_nho_em",   source: "remote", caption: { background: { colors: ["#FFFFFF", "#6D9EEB"] }, max_lines: 1, text: "보고 싶어 🥺", text_color: "#000000E6", type: "static_content" } },
      { overlay_id: "caption:miss_you",     source: "remote", caption: { background: { colors: ["#EC0C00", "#FF493F"] }, icon: { data: "🥰", type: "emoji" }, max_lines: 1, text: "Miss you", text_color: "#FFFFFFDB", type: "static_content" } },
      { overlay_id: "caption:em_nho_anhh",  source: "remote", caption: { background: { colors: ["#FF6B81", "#FF8E9E", "#FFB3C6"] }, icon: { data: "🥺", type: "emoji" }, max_lines: 1, text: "em nhớ anhh", text_color: "#8C1938", type: "static_content" } },
      { overlay_id: "caption:i_love_you",   source: "remote", caption: { background: { colors: ["#FF8FAB", "#FFC2D1", "#FFE5EC"] }, icon: { data: "💗", type: "emoji" }, max_lines: 1, text: "i love you", text_color: "#8A304F", type: "static_content" } },
      { overlay_id: "caption:yeu_cuc_dang", source: "remote", caption: { background: { colors: ["#F2B5C8", "#F8D5D9", "#F6E5D2"] }, icon: { data: "🎀", type: "emoji" }, max_lines: 1, text: "yêu cục dàng", text_color: "#754454", type: "static_content" } },
      { overlay_id: "caption:baby_love",    source: "remote", caption: { background: { colors: ["#FFB6C1", "#FF69B4", "#FF1493"] }, icon: { data: "🧸", type: "emoji" }, max_lines: 1, text: "Baby Love 💖", text_color: "#FFFFFFE6", type: "static_content" } },
      { overlay_id: "caption:minh_cuoi_nhau", source: "remote", caption: { background: { colors: ["#F0B8CD", "#F7D4DF", "#E7C9EF"] }, icon: { data: "💍", type: "emoji" }, max_lines: 1, text: "hông ấy mình cưới nhau đi", text_color: "#70465B", type: "static_content" } },
      { overlay_id: "caption:cam_thay_hanh_phuc", source: "remote", caption: { background: { colors: ["#EC407A", "#F8BBD0"] }, icon: { data: "🇻🇳", type: "emoji" }, max_lines: 1, text: "Cảm thấy hạnh phúc", localized_text: { en: "Feeling Happy", vn: "Cảm thấy hạnh phúc" }, text_color: "#FFFFFFE6", type: "static_content" } },
    ]
  }
];

// ==================== MAIN LOGIC ====================
const url = $request.url;
const ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
const body = safeJson($response.body, null);

// Xử lý API RevenueCat (nếu app có gọi)
if (url.includes("api.revenuecat.com") && body && body.subscriber) {
  body.subscriber.subscriptions = body.subscriber.subscriptions || {};
  body.subscriber.entitlements  = body.subscriber.entitlements  || {};
  body.subscriber.subscriptions["locket_1600_1y"] = fakeSub;
  body.subscriber.entitlements["Gold"] = fakeEnt;
  body.Attention = "iutdyy — Premium unlocked.";
  $done({ body: JSON.stringify(body) });
} 
// Xử lý API Remote Config (ép app nhận Gold)
else if (url.includes("firebaseremoteconfig") && body && typeof body === "object") {
  body.entries = body.entries || {};
  const e = body.entries;

  // Branding
  body.Attention = `iutdyy — thành viên từ ${MEMBER_SINCE}. Đừng dùng cho mục đích thương mại.`;
  setStr(e, "settings_instagram_url", "");
  setStr(e, "settings_tiktok_url", "");
  setStr(e, "iutdyy_member_since", MEMBER_SINCE);

  // Mở khoá tính năng & Fake Gold
  setStr(e, "profile_badge_visible", "true");
  setStr(e, "android_subscribe_gold_button_enabled", "false");
  setJsonString(e, "feature_gates", FEATURE_GATES);
  setJsonString(e, "upsell_features", UPSELL);
  setJsonString(e, "paywall_presentation_config", PAYWALL);
  setJsonString(e, "subscriptions", { "locket_1600_1y": fakeSub });
  setJsonString(e, "entitlements", { "Gold": fakeEnt });

  // Ads & tracking
  Object.keys(ADS_OFF).forEach(k => setStr(e, k, ADS_OFF[k]));

  // Camera
  setJsonString(e, "camera", CAMERA);
  setJsonString(e, "camera_roll", CAMERA_ROLL);
  setJsonString(e, "live_photos", LIVE_PHOTOS);
  setJsonString(e, "camera_filter_config", CAMERA_FILTER);
  Object.keys(CAMERA_TOGGLES).forEach(k => setStr(e, k, CAMERA_TOGGLES[k]));

  // Friends, moments, UI
  Object.keys(FRIEND_LIMITS).forEach(k => setStr(e, k, FRIEND_LIMITS[k]));
  Object.keys(MOMENTS_CHAT).forEach(k => setStr(e, k, MOMENTS_CHAT[k]));

  // Streak
  const streak = safeJson(e.streak_config || "{}", {});
  streak.minimum_recovery_count = 0;
  streak.minimum_display_count = 0;
  e.streak_config = JSON.stringify(streak);

  Object.keys(UI_WIDGET).forEach(k => setStr(e, k, UI_WIDGET[k]));
  Object.keys(SYSTEM_CACHE).forEach(k => setStr(e, k, SYSTEM_CACHE[k]));
  Object.keys(OVERLAY).forEach(k => setStr(e, k, OVERLAY[k]));

  // Overlays & Widget
  e.overlay_items = JSON.stringify(OVERLAY_ITEMS);
  setJsonString(e, "widget_frame_event", {
    uid: "midautumn_2026", url: "https://i.ibb.co/1Yt1Dzzy/Shin-chan-1.png",
    use_local_time_zone: true, placement: "below", start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59",
  });

  // Popup Welcome
  setJsonString(e, "feature_discovery_popup_config", {
    tag: "LOCKET GOLD", tag_gradient: true, tag_style: "gold_gradient",
    title: "",
    feature_set: [{ title: "Tik Tok iutdyy", body: "Mời mọi người tham gia cộng đồng bằng mã QR hoặc link dưới đây:", imageURL: "https://cdn.phototourl.com/member/2026-10-17-2489ff2c-1a3c-4532-a7ec-70801080627d.png" }],
    primary_button_title: "done", campaign: "iutdyy_unlock_v2",
    start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true,
  });

  $done({ body: JSON.stringify(body) });
} else {
  $done({});
}
