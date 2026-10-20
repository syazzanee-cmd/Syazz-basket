/* =========================================================
   ICONS
   ========================================================= */
const ICONS = {
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  box: "M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8",
  cart: "M3 3h2l2.4 12.4a2 2 0 002 1.6h8.2a2 2 0 002-1.6L21 7H6M9 21a1 1 0 100-2 1 1 0 000 2zM19 21a1 1 0 100-2 1 1 0 000 2z",
  users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  bar: "M18 20V10M12 20V4M6 20v-6",
  tag: "M20.59 13.41L11 3.83A2 2 0 009.59 3.24H4a1 1 0 00-1 1v5.59a2 2 0 00.59 1.41l9.58 9.58a2 2 0 002.82 0l4.6-4.6a2 2 0 000-2.82zM7 7h.01",
  settings: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.6 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.6a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09A1.65 1.65 0 0015 4.6a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.4 9c.14.36.44.63.82.75.36.13.7.15 1.09.15H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
  logout: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35",
  bell: "M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0",
  chevronDown: "M6 9l6 6 6-6",
  chevronRight: "M9 6l6 6-6 6",
  chevronLeft: "M15 6l-6 6 6 6",
  plus: "M12 5v14M5 12h14",
  edit: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
  trash: "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z",
  eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 100-6 3 3 0 000 6z",
  x: "M18 6L6 18M6 6l12 12",
  upload: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",
  filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
  arrowUpRight: "M7 17L17 7M7 7h10v10",
  arrowDownRight: "M7 7l10 10M17 7v10H7",
  check: "M20 6L9 17l-5-5",
  alertTriangle: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01",
  image: "M3 3h18v18H3zM8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM21 15l-5-5L5 21",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
  printer: "M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z",
  mapPin: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M12 13a3 3 0 100-6 3 3 0 000 6z",
  mail: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zM22 6l-10 7L2 6",
  phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z",
  package: "M16.5 9.4L7.5 4.21M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12",
  layers: "M12 2l10 6-10 6L2 8l10-6zM2 16l10 6 10-6M2 12l10 6 10-6",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  dot: "M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0",
  percent: "M19 5L5 19M6.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  info: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 16v-4M12 8h.01",
};
function icon(name, size = 18, cls = "", sw = 1.8) {
  const d = ICONS[name] || ICONS.dot;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="${sw}" stroke-linecap="round"
    stroke-linejoin="round" class="${cls}"><path d="${d}"/></svg>`;
}

/* =========================================================
   DATA
   ========================================================= */
const rp = (n) => "Rp " + Math.round(n).toLocaleString("id-ID");
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const CATEGORIES = [
  { id: "c1", name: "BASKETBALL", products: 64, active: true, created: "12 Jan 2025" },
  { id: "c2", name: "RUNNING", products: 81, active: true, created: "12 Jan 2025" },
  { id: "c3", name: "LIFESTYLE", products: 97, active: true, created: "18 Feb 2025" },
  { id: "c4", name: "TRAINING", products: 28, active: true, created: "03 Mar 2025" },
  { id: "c5", name: "FOOTBALL", products: 16, active: false, created: "22 May 2025" },
];

const PRODUCT_SEED = [
  { name: "Nike Giannis Freak 8", cat: "BASKETBALL", price: 1250000, sold: 128, stock: 42, brand: "NIKE", collection: "Giannis", sku: "NIKE-BB-1001", color: "Black", size: "40-45", image: "../images/shoes nike/GIANNIS+FREAK+8+LE+EP.png" },
  { name: "Nike Giannis Freak 8 LX", cat: "BASKETBALL", price: 980000, sold: 104, stock: 18, brand: "NIKE", collection: "Giannis", sku: "NIKE-BB-1002", color: "White", size: "40-45", image: "../images/shoes nike/GIANNIS+FREAK+8+LX+EP.png" },
  { name: "Nike Giannis Immortality 5", cat: "BASKETBALL", price: 1150000, sold: 97, stock: 31, brand: "NIKE", collection: "Giannis", sku: "NIKE-BB-1003", color: "Red", size: "39-45", image: "../images/shoes nike/GIANNIS+IMMORTALITY+5+EP.png" },
  { name: "Jordan Luka 77 PF", cat: "BASKETBALL", price: 890000, sold: 88, stock: 54, brand: "JORDAN", collection: "Luka", sku: "JRD-BB-1004", color: "White", size: "40-45", image: "../images/shoes nike/JORDAN+LUKA+77+PF.png" },
  { name: "Nike KD19 EP", cat: "BASKETBALL", price: 1050000, sold: 76, stock: 9, brand: "NIKE", collection: "Kevin Durant", sku: "NIKE-BB-1005", color: "Blue", size: "40-45", image: "../images/shoes nike/KD19+EP.png" },
  { name: "Nike Kobe 5 Protro", cat: "BASKETBALL", price: 920000, sold: 61, stock: 22, brand: "NIKE", collection: "Kobe", sku: "NIKE-BB-1006", color: "Black", size: "40-45", image: "../images/shoes nike/Nike Kobe 5 Protro X-ray 37_5.jpg" },
  { name: "Nike Men's Sneakers", cat: "LIFESTYLE", price: 870000, sold: 39, stock: 20, brand: "NIKE", collection: "Lifestyle", sku: "NIKE-LS-1007", color: "White", size: "39-44", image: "../images/shoes nike/Nike Men's Sneakers.jpg" },
  { name: "Nike Sneaker Three Quarter", cat: "LIFESTYLE", price: 1320000, sold: 55, stock: 15, brand: "NIKE", collection: "Lifestyle", sku: "NIKE-LS-1008", color: "Black", size: "39-44", image: "../images/shoes nike/Nike Mens SneakerThree Quarters Tall.jpg" },
  { name: "Air Jordan Authentic", cat: "BASKETBALL", price: 990000, sold: 47, stock: 63, brand: "JORDAN", collection: "Air Jordan", sku: "JRD-BB-1009", color: "White", size: "40-45", image: "../images/shoes nike/Nike Official Authentic AIR JORDAN Men's Comfortable and Durable Basketball Shoes AR4430-106.jpg" },
  { name: "Jordan Luka 5 PF", cat: "BASKETBALL", price: 1180000, sold: 42, stock: 4, brand: "JORDAN", collection: "Luka", sku: "JRD-BB-1010", color: "Grey", size: "40-45", image: "../images/shoes nike/JORDAN+LUKA+5+PF.png" },
];
function computeStatus(stock) { return stock === 0 ? "OUT OF STOCK" : stock <= 20 ? "LOW STOCK" : "ACTIVE"; }
let PRODUCTS = PRODUCT_SEED.map((p, i) => ({ id: "P" + (1000 + i), status: computeStatus(p.stock), ...p }));
function productImage(product) {
  return product.image ? `<img src="${esc(product.image)}" alt="${esc(product.name)}" loading="lazy"/>` : icon("box", 20);
}

const CUSTOMER_NAMES = ["Rizky Pratama", "Dewi Anggraini", "Bagas Saputra", "Putri Ramadhani", "Fajar Nugroho", "Ayu Lestari", "Andika Wijaya", "Sri Wahyuni", "Reza Firmansyah", "Nadia Kusuma", "Yoga Prasetyo", "Intan Permata"];
const CITIES = ["Jakarta Selatan", "Bandung", "Surabaya", "Yogyakarta", "Semarang", "Denpasar", "Medan", "Makassar"];
const CUSTOMERS = CUSTOMER_NAMES.map((name, i) => {
  const orders = 3 + ((i * 7) % 18);
  const spent = orders * (900000 + (i * 137000) % 1600000);
  const pfpNumber = (i % 12) + 1;
  return {
    id: "CU" + (500 + i), name,
    email: name.toLowerCase().replace(/ /g, ".") + "@gmail.com",
    phone: "08" + (12 + i) + "3456" + (100 + i * 3),
    city: CITIES[i % CITIES.length],
    avatar: `../images/pfp(${pfpNumber}).jpg`,
    address: "Jl. Merdeka No. " + (i * 3 + 4) + ", " + CITIES[i % CITIES.length],
    orders, spent,
    lastOrder: ["15 Sep 2026", "12 Sep 2026", "08 Sep 2026", "30 Aug 2026", "22 Aug 2026"][i % 5],
    status: i % 6 === 0 ? "VIP" : "ACTIVE"
  };
});

const STATUSES = ["PAID", "PROCESSING", "SHIPPED", "COMPLETED", "CANCELLED"];
const PAYMENTS = ["QRIS", "Bank Transfer BCA", "Bank Transfer BNI", "GoPay", "OVO", "Credit Card"];
let ORDERS = Array.from({ length: 24 }).map((_, i) => {
  const prod = PRODUCTS[i % PRODUCTS.length];
  const cust = CUSTOMERS[i % CUSTOMERS.length];
  const status = STATUSES[i % STATUSES.length];
  const qty = 1 + (i % 3);
  const subtotal = prod.price * qty;
  const shipping = 25000;
  const discount = i % 4 === 0 ? Math.round(subtotal * 0.1) : 0;
  const day = 15 - (i % 15);
  return {
    id: "#" + (10291 - i), customer: cust, product: prod, qty, size: 40 + (i % 6),
    date: (day < 10 ? "0" + day : day) + " Sep 2026",
    payment: PAYMENTS[i % PAYMENTS.length],
    paymentStatus: status === "CANCELLED" ? "REFUNDED" : "PAID",
    txId: "TRX-2026-" + (88210 + i * 7),
    subtotal, shipping, discount, total: subtotal + shipping - discount, status
  };
});

let COUPONS = [
  { code: "SYAZZ10", type: "PERCENT", amount: 10, min: 500000, max: 300000, start: "01 Sep 2026", end: "30 Sep 2026", used: 214, limit: 500, status: "ACTIVE" },
  { code: "NEWDROP25", type: "PERCENT", amount: 25, min: 1000000, max: 500000, start: "10 Sep 2026", end: "20 Sep 2026", used: 88, limit: 200, status: "ACTIVE" },
  { code: "FREESHIP", type: "FIXED", amount: 25000, min: 300000, max: 25000, start: "01 Aug 2026", end: "31 Dec 2026", used: 940, limit: 2000, status: "ACTIVE" },
  { code: "FLASH50", type: "PERCENT", amount: 50, min: 2000000, max: 750000, start: "01 Jul 2026", end: "07 Jul 2026", used: 500, limit: 500, status: "EXPIRED" },
];

let BANNERS = [
  { id: "B1", title: "SPEED SEASON — NEW RUNNING DROP", campaign: "Velocity Launch", start: "01 Sep 2026", end: "30 Sep 2026", status: "ACTIVE", accent: "RUNNING", image: "../images/Sponsor(2).jpg" },
  { id: "B2", title: "COURT CONTROL — BASKETBALL PACK", campaign: "Retro '26", start: "05 Sep 2026", end: "25 Sep 2026", status: "ACTIVE", accent: "BASKETBALL", image: "../images/Sponsor(3).jpg" },
  { id: "B3", title: "STREET ENERGY — LIFESTYLE EDIT", campaign: "Street '26", start: "20 Aug 2026", end: "10 Sep 2026", status: "SCHEDULED", accent: "LIFESTYLE", image: "../images/Sponsor(1).jpg" },
];

function genSeries(n, base, amp, seed = 1) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const wobble = Math.sin(i * 0.7 + seed) * amp + Math.sin(i * 1.9 + seed * 3) * amp * 0.4;
    out.push(Math.max(0, Math.round(base + wobble + i * (amp * 0.05))));
  }
  return out;
}
const DAY_LABELS_30 = Array.from({ length: 30 }).map((_, i) => {
  const d = new Date(2026, 7, 20 + i);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
});
const REVENUE_SERIES_30 = genSeries(30, 42000000, 9000000, 2);
const ORDERS_SERIES_30 = genSeries(30, 260, 60, 5);
const TRAFFIC_SOURCES = [
  { name: "Instagram", value: 41 }, { name: "Google", value: 27 }, { name: "Direct", value: 16 },
  { name: "TikTok", value: 10 }, { name: "Other", value: 6 }
];

/* =========================================================
   STATE
   ========================================================= */
let state = {
  hash: window.location.hash || "#/",
  mobileOpen: false,
  notifOpen: false,
  profileOpen: false,
  toast: null,
  page: 1,
  filters: {},
};
let toastTimer = null;
function toast(msg) {
  state.toast = msg;
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { state.toast = null; render(); }, 2600);
}
function nav(path) { window.location.hash = path; }

/* =========================================================
   HELPERS
   ========================================================= */
function badge(status) {
  const map = {
    PAID: "paid", PROCESSING: "processing", SHIPPED: "shipped", COMPLETED: "completed",
    CANCELLED: "cancelled", REFUNDED: "refunded", ACTIVE: "active", "IN STOCK": "in-stock",
    "LOW STOCK": "low-stock", "OUT OF STOCK": "out-of-stock", EXPIRED: "expired",
    SCHEDULED: "scheduled", VIP: "vip", DRAFT: "draft",
  };
  const cls = map[status] || "default";
  return `<span class="badge ${cls}">${esc(status)}</span>`;
}
function statCard({ label, value, delta, icon: ic, sub }) {
  const up = delta && delta.startsWith("+");
  return `<div class="stat">
    <div class="stat-head">
      <span class="stat-label">${esc(label)}</span>
      ${ic ? `<span class="stat-icon">${icon(ic, 16)}</span>` : ""}
    </div>
    <div class="stat-value kpi-num">${value}</div>
    ${delta ? `<div class="stat-delta ${up ? "up" : "down"}">
      ${icon(up ? "arrowUpRight" : "arrowDownRight", 12)}
      <span>${esc(delta)}</span>
      ${sub ? `<span class="sub">${esc(sub)}</span>` : ""}
    </div>`: ""}
    <div class="stat-corner"></div>
  </div>`;
}
function sectionCard({ title, right, body, className = "" }) {
  return `<div class="card ${className}">
    ${(title || right) ? `<div class="card-head">
      ${title ? `<h3 class="card-title">${esc(title)}</h3>` : ""}
      ${right || ""}
    </div>`: ""}
    ${body}
  </div>`;
}
function pageHead({ eyebrow, title, sub, actions }) {
  return `<div class="page-head">
    <div>
      ${eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : ""}
      <h1 class="page-h1">${esc(title)}</h1>
      ${sub ? `<p class="page-sub">${esc(sub)}</p>` : ""}
    </div>
    ${actions ? `<div class="page-actions">${actions}</div>` : ""}
  </div>`;
}
function empty(text, ic = "info") {
  return `<div class="empty">${icon(ic, 28)}<span>${esc(text)}</span></div>`;
}
function pagination(page, pages) {
  if (pages <= 1) return "";
  let btns = "";
  for (let i = 1; i <= pages; i++) {
    btns += `<button class="page-btn ${page === i ? "active" : ""}" data-page="${i}">${i}</button>`;
  }
  return `<div class="pagination">
    <span class="page-info">PAGE ${page} OF ${pages}</span>
    <div class="page-btns">
      <button class="page-btn" data-page="${page - 1}" ${page <= 1 ? "disabled" : ""}>${icon("chevronLeft", 14)}</button>
      ${btns}
      <button class="page-btn" data-page="${page + 1}" ${page >= pages ? "disabled" : ""}>${icon("chevronRight", 14)}</button>
    </div>
  </div>`;
}

/* Charts */
function lineChart(series, labels, height = 260, formatY = (v) => v) {
  const w = 1000, h = height, padL = 46, padR = 10, padT = 16, padB = 26;
  const max = Math.max(...series) * 1.15, min = 0;
  const x = i => padL + (i / (series.length - 1)) * (w - padL - padR);
  const y = v => padT + (1 - (v - min) / (max - min)) * (h - padT - padB);
  const path = series.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
  const area = `${path} L ${x(series.length - 1)} ${y(0)} L ${x(0)} ${y(0)} Z`;
  const gridN = 4;
  const step = Math.max(1, Math.floor(labels.length / 10));
  let grid = "";
  for (let i = 0; i <= gridN; i++) {
    const gy = padT + (i / gridN) * (h - padT - padB);
    const val = max - (i / gridN) * max;
    grid += `<line x1="${padL}" x2="${w - padR}" y1="${gy}" y2="${gy}" stroke="#292020" stroke-dasharray="2 4"/>
      <text x="${padL - 8}" y="${gy + 3}" text-anchor="end" class="tick">${esc(formatY(val))}</text>`;
  }
  let dots = "";
  const dotStep = Math.ceil(series.length / 14);
  series.forEach((v, i) => {
    if (i % dotStep === 0) {
      dots += `<circle cx="${x(i)}" cy="${y(v)}" r="2.5" fill="#090707" stroke="#E01B20" stroke-width="1.6"/>`;
    }
  });
  let lbl = "";
  labels.forEach((l, i) => {
    if (i % step === 0) {
      lbl += `<text x="${x(i)}" y="${h - 6}" text-anchor="middle" class="tick">${esc(l)}</text>`;
    }
  });
  return `<svg viewBox="0 0 ${w} ${h}" class="line-svg" style="height:${height}px">
    <defs>
      <linearGradient id="fillRed" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#C91519" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="#C91519" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${grid}
    <path d="${area}" fill="url(#fillRed)"/>
    <path d="${path}" fill="none" stroke="#C91519" stroke-width="2.5" class="chart-line" stroke-linecap="round" stroke-linejoin="round"/>
    ${dots}
    ${lbl}
  </svg>`;
}
function barRow(label, value, max, suffix = "%") {
  const pct = Math.round((value / max) * 100);
  return `<div class="bar-row">
    <div class="bar-row-head"><span class="label">${esc(label)}</span><span class="value">${value}${suffix}</span></div>
    <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
  </div>`;
}
function vBarChart(data, height = 220, formatY = (v) => v) {
  const max = Math.max(...data.map(d => d.value)) * 1.2;
  return `<div class="vbar-chart" style="height:${height}px">
    ${data.map(d => `<div class="vbar-col">
      <span class="vbar-val">${esc(formatY(d.value))}</span>
      <div class="vbar" style="height:${(d.value / max) * 100}%"></div>
      <span class="vbar-lbl">${esc(d.label)}</span>
    </div>`).join("")}
  </div>`;
}

/* =========================================================
   NAV
   ========================================================= */
const NAV = [
  {
    group: "DASHBOARD", items: [
      { label: "Overview", icon: "grid", path: "#/" },
      { label: "Sales Analytics", icon: "activity", path: "#/dashboard/sales" },
      { label: "Recent Orders", icon: "cart", path: "#/dashboard/recent-orders" },
      { label: "Best Sellers", icon: "package", path: "#/dashboard/best-sellers" },
    ]
  },
  {
    group: "PRODUCTS", items: [
      { label: "All Products", icon: "box", path: "#/products" },
      { label: "Add Product", icon: "plus", path: "#/products/new" },
      { label: "Categories", icon: "layers", path: "#/categories" },
      { label: "Inventory", icon: "bar", path: "#/inventory" },
    ]
  },
  {
    group: "ORDERS", items: [
      { label: "All Orders", icon: "cart", path: "#/orders" },
      { label: "Processing", icon: "cart", path: "#/orders/processing" },
      { label: "Shipped", icon: "cart", path: "#/orders/shipped" },
      { label: "Completed", icon: "cart", path: "#/orders/completed" },
    ]
  },
  {
    group: "CUSTOMERS", items: [
      { label: "All Customers", icon: "users", path: "#/customers" },
      { label: "Customer Details", icon: "users", path: "#/customers/CU500" },
    ]
  },
  {
    group: "ANALYTICS", items: [
      { label: "Revenue", icon: "bar", path: "#/analytics/revenue" },
      { label: "Sales", icon: "activity", path: "#/analytics/sales" },
      { label: "Traffic", icon: "arrowUpRight", path: "#/analytics/traffic" },
    ]
  },
  {
    group: "PROMOTIONS", items: [
      { label: "Coupons", icon: "tag", path: "#/promotions/coupons" },
      { label: "Banners", icon: "image", path: "#/promotions/banners" },
    ]
  },
];
function matchPath(hash, path) {
  if (path === "#/") return hash === "#/" || hash === "" || hash === "#";
  return hash === path || hash.startsWith(path + "/") || hash.startsWith(path + "?");
}
function sidebar() {
  const hash = state.hash;
  return `
  ${state.mobileOpen ? `<div class="sidebar-overlay" data-close-sidebar></div>` : ""}
  <aside class="sidebar ${state.mobileOpen ? "open" : ""}">
    <div class="sidebar-brand diagonals">
      <div class="sidebar-brand-inner">
        <div class="logo-box"><span>S</span></div>
        <div>
          <div class="brand-name">SYAZZ</div>
          <div class="brand-sub">ADMIN CONTROL</div>
        </div>
      </div>
    </div>
    <nav class="sidebar-nav">
      ${NAV.map(g => `<div class="nav-group">
        <div class="nav-group-title">${esc(g.group)}</div>
        ${g.items.map(it => {
    const active = matchPath(hash, it.path);
    return `<a href="${it.path}" class="nav-item ${active ? "active" : ""}" data-close-sidebar>
            ${icon(it.icon, 15)}${esc(it.label)}
          </a>`;
  }).join("")}
      </div>`).join("")}
      <div class="nav-group">
        <div class="nav-group-title">SYSTEM</div>
        <a href="#/settings" class="nav-item ${matchPath(hash, "#/settings") ? "active" : ""}" data-close-sidebar>
          ${icon("settings", 15)}SETTINGS
        </a>
      </div>
    </nav>
    <div class="sidebar-footer">
      <a href="../project/index.html" class="logout-link">${icon("logout", 15)}LOGOUT</a>
    </div>
  </aside>`;
}
function header(title, crumb) {
  const notifs = [
    { t: "New order #10291 received", s: "2m ago" },
    { t: "Air Max 95 stock is low (9 left)", s: "18m ago" },
    { t: "Coupon SYAZZ10 reached 200 uses", s: "1h ago" },
    { t: "Payout of Rp 84.200.000 processed", s: "3h ago" },
  ];
  return `<header class="header">
    <button class="header-btn mobile-toggle" data-open-sidebar>${icon("grid", 20)}</button>
    <div class="header-title">
      <div class="crumb">${esc(crumb)}</div>
      <div class="page-title-bar">${esc(title)}</div>
    </div>
    <div class="header-search">
      ${icon("search", 14)}
      <input type="text" placeholder="Search orders, products..." data-search/>
    </div>
    <div style="position:relative">
      <button class="header-btn" data-toggle-notif>
        ${icon("bell", 16)}
        <span class="notif-badge">4</span>
      </button>
      ${state.notifOpen ? `<div class="dropdown" data-dropdown>
        <div class="dropdown-head">Notifications</div>
        ${notifs.map(n => `<div class="dropdown-item">
          <div class="dd-title">${esc(n.t)}</div>
          <div class="dd-time">${esc(n.s)}</div>
        </div>`).join("")}
      </div>`: ""}
    </div>
    <div style="position:relative">
      <button class="profile-btn" data-toggle-profile>
        <div class="profile-avatar"><img src="../images/si anwar.jpeg" alt="Admin Ganteng"/></div>
        <span class="profile-name">ADMIN</span>
        ${icon("chevronDown", 13)}
      </button>
      ${state.profileOpen ? `<div class="dropdown narrow" data-dropdown>
        <div class="dropdown-profile-head">
          <div class="name">Admin Ganteng</div>
          <div class="email">Syazzganteng@Gmail.com</div>
        </div>

        <a href="#/settings" class="dropdown-item">Profile Settings</a>
        <a href="#/settings" class="dropdown-item">Store Settings</a>
        <a href="../project/index.html" class="dropdown-item" style="border-top:1px solid var(--line)">Logout</a>
    
      </div>`: ""}
    </div>
  </header>`;
}

/* =========================================================
   SHARED TABLE
   ========================================================= */
function ordersTable(orders, compact) {
  return `<div class="table-wrap"><table style="min-width:820px">
    <thead><tr>
      <th>Order</th><th>Customer</th><th>Product</th>
      ${!compact ? "<th>Date</th><th>Payment</th>" : ""}
      <th>Total</th><th>Status</th><th></th>
    </tr></thead>
    <tbody>
      ${orders.map(o => `<tr>
        <td class="td-display">${esc(o.id)}</td>
        <td>${esc(o.customer.name)}</td>
        <td class="td-sub">${esc(o.product.name)}</td>
        ${!compact ? `<td class="td-sub">${esc(o.date)}</td>
        <td class="td-sub">${esc(o.payment)}</td>` : ""}
        <td class="td-display">${rp(o.total)}</td>
        <td>${badge(o.status)}</td>
        <td class="text-right">
          <a href="#/orders/detail/${o.id.replace("#", "")}" style="color:var(--sub)">
            ${icon("chevronRight", 16)}
          </a>
        </td>
      </tr>`).join("")}
    </tbody>
  </table></div>`;
}

/* =========================================================
   PAGES
   ========================================================= */
function Overview() {
  const recent = ORDERS.slice(0, 5);
  const best = [...PRODUCTS].sort((a, b) => b.sold - a.sold).slice(0, 3);
  return `<div class="page-enter">
    <div class="hero diagonals">
      <span class="watermark">SYAZZ</span>
      <div class="hero-inner">
        <div class="hero-eyebrow">SYAZZ CONTROL / PERFORMANCE COMMERCE</div>
        <h1 class="hero-h1">PERFORMANCE<br>OVERVIEW</h1>
        <p class="hero-p">Monitor your store performance, orders, products and customers from one control center.</p>
        <div class="hero-actions">
          <a href="#/dashboard/sales" class="btn btn-primary btn-md">${icon("activity", 14)}VIEW ANALYTICS</a>
          <a href="#/products/new" class="btn btn-ghost btn-md">${icon("plus", 14)}ADD PRODUCT</a>
        </div>
      </div>
    </div>
    <div class="grid g4 mb-32">
      ${statCard({ label: "Total Revenue", value: "Rp 248.5M", delta: "+24.8%", sub: "vs last month", icon: "bar" })}
      ${statCard({ label: "Total Orders", value: "8,492", delta: "+18.2%", sub: "vs last month", icon: "cart" })}
      ${statCard({ label: "Customers", value: "12,840", delta: "+21.5%", sub: "vs last month", icon: "users" })}
      ${statCard({ label: "Products", value: "286", delta: "+8.4%", sub: "vs last month", icon: "box" })}
    </div>
    ${sectionCard({
    title: "Sales Performance",
    right: `<span style="font-size:11px;font-family:'Oswald',sans-serif;color:#34d399;display:flex;align-items:center;gap:4px">${icon("arrowUpRight", 12)}+24.8% vs previous period</span>`,
    body: lineChart(REVENUE_SERIES_30, DAY_LABELS_30, 260, v => "Rp" + Math.round(v / 1000000) + "M"),
    className: "mb-32"
  })}
    <div class="grid g-3-2 gap-24">
      ${sectionCard({
    title: "Recent Orders",
    right: `<a href="#/orders" style="font-size:11px;font-family:'Oswald',sans-serif;color:var(--red);display:flex;align-items:center;gap:4px">VIEW ALL ORDERS ${icon("chevronRight", 12)}</a>`,
    body: ordersTable(recent, true)
  })}
      ${sectionCard({
    title: "Best Sellers",
    right: `<a href="#/dashboard/best-sellers" style="font-size:11px;font-family:'Oswald',sans-serif;color:var(--red);display:flex;align-items:center;gap:4px">VIEW ALL ${icon("chevronRight", 12)}</a>`,
    body: `<div style="display:flex;flex-direction:column;gap:16px">
          ${best.map(p => `<a href="#/products/${p.id}" style="display:flex;align-items:center;gap:12px">
            <div class="product-thumb" style="width:56px;height:56px;flex-shrink:0">${productImage(p)}</div>
            <div style="min-width:0;flex:1">
              <div style="font-size:12px;font-family:'Oswald',sans-serif;letter-spacing:0.03em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.name)}</div>
              <div style="font-size:10px;color:var(--sub);margin-top:2px">${esc(p.cat)} · ${rp(p.price)}</div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div style="font-size:12px;font-family:'Oswald',sans-serif">${p.sold}</div>
              <div style="font-size:10px;color:var(--sub)">sold</div>
            </div>
          </a>`).join("")}
        </div>`
  })}
    </div>
  </div>`;
}

function SalesAnalyticsPage() {
  const range = state.filters.range || "30 DAYS";
  const ranges = ["7 DAYS", "30 DAYS", "90 DAYS", "1 YEAR"];
  const n = range === "7 DAYS" ? 7 : range === "30 DAYS" ? 30 : range === "90 DAYS" ? 90 : 12;
  const rev = genSeries(n, 42000000, 9000000, 2);
  const ord = genSeries(n, 260, 60, 5);
  const aov = rev.map((r, i) => Math.round(r / (ord[i] || 1)));
  const labels = Array.from({ length: n }).map((_, i) => range === "1 YEAR" ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i] : "D" + (i + 1));
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "DASHBOARD / ANALYTICS", title: "Sales Performance", sub: "Track revenue, orders and average order value across time." })}
    ${sectionCard({
    right: `<div style="display:flex;gap:4px;background:var(--bg2);border:1px solid var(--line);padding:4px">
        ${ranges.map(r => `<button data-range="${r}" style="padding:6px 12px;font-size:10px;font-family:'Oswald',sans-serif;letter-spacing:0.05em;${range === r ? "background:var(--red);color:var(--ink)" : "color:var(--sub)"}">${r}</button>`).join("")}
      </div>`,
    className: "mb-24",
    body: `<div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:24px;margin-bottom:24px">
        <div><div style="font-size:10px;color:var(--sub);font-family:'Oswald',sans-serif;letter-spacing:0.1em">REVENUE</div>
          <div style="font-size:24px;font-family:'Oswald',sans-serif">${rp(rev.reduce((a, b) => a + b, 0))}</div></div>
        <div><div style="font-size:10px;color:var(--sub);font-family:'Oswald',sans-serif;letter-spacing:0.1em">ORDERS</div>
          <div style="font-size:24px;font-family:'Oswald',sans-serif">${ord.reduce((a, b) => a + b, 0).toLocaleString()}</div></div>
        <div><div style="font-size:10px;color:var(--sub);font-family:'Oswald',sans-serif;letter-spacing:0.1em">AVG ORDER VALUE</div>
          <div style="font-size:24px;font-family:'Oswald',sans-serif">${rp(rev.reduce((a, b) => a + b, 0) / ord.reduce((a, b) => a + b, 0))}</div></div>
        <span style="font-size:11px;font-family:'Oswald',sans-serif;color:#34d399;display:flex;align-items:center;gap:4px;margin-left:auto">${icon("arrowUpRight", 12)}+24.8% compared to previous period</span>
      </div>
      ${lineChart(rev, labels, 260, v => "Rp" + Math.round(v / 1000000) + "M")}`
  })}
    <div class="grid g2 gap-24">
      ${sectionCard({ title: "Orders Trend", body: lineChart(ord, labels, 200, v => Math.round(v)) })}
      ${sectionCard({ title: "Average Order Value", body: lineChart(aov, labels, 200, v => "Rp" + Math.round(v / 1000) + "K") })}
    </div>
  </div>`;
}

function RecentOrdersPage() {
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "DASHBOARD / ORDER FLOW", title: "Recent Orders", sub: "The latest transactions across the SYAZZ storefront." })}
    ${sectionCard({ body: ordersTable(ORDERS.slice(0, 12), false) })}
  </div>`;
}

function BestSellersPage() {
  const best = [...PRODUCTS].sort((a, b) => b.sold - a.sold);
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "DASHBOARD / PRODUCT PERFORMANCE", title: "Best Sellers", sub: "Top performing products ranked by units sold." })}
    <div class="product-grid">
      ${best.map((p, i) => `<a href="#/products/${p.id}" class="product-card">
        <span class="product-rank">${String(i + 1).padStart(2, "0")}</span>
        <div class="product-img">${productImage(p)}</div>
        <div class="product-cat">${esc(p.cat)}</div>
        <div class="product-name">${esc(p.name)}</div>
        <div class="product-meta"><span style="font-family:'Oswald',sans-serif">${rp(p.price)}</span><span style="color:var(--sub);font-size:12px">${p.sold} sold</span></div>
        <div class="product-foot"><span class="lbl">Revenue</span><span class="val">${rp(p.price * p.sold)}</span></div>
        <div class="product-foot"><span class="lbl">Stock</span><span class="val ${p.stock < 20 ? "text-red" : ""}">${p.stock} units</span></div>
      </a>`).join("")}
    </div>
  </div>`;
}

function AllProductsPage() {
  const q = (state.filters.q || "").toLowerCase();
  const cat = state.filters.cat || "ALL";
  const status = state.filters.status || "ALL";
  const page = state.page || 1;
  const perPage = 7;
  const filtered = PRODUCTS.filter(p =>
    (cat === "ALL" || p.cat === cat) &&
    (status === "ALL" || p.status === status) &&
    (p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q))
  );
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);
  return `<div class="page-enter">
    ${pageHead({
    eyebrow: "PRODUCTS / CATALOG CONTROL", title: "Products", sub: "Manage your complete product catalog.",
    actions: `<a href="#/products/new" class="btn btn-primary btn-md">${icon("plus", 14)}ADD PRODUCT</a>`
  })}
    ${sectionCard({
    body: `<div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px">
        <div style="position:relative;flex:1;min-width:200px">
          ${icon("search", 14)}
          <input data-filter="q" value="${esc(q)}" placeholder="Search products..." style="padding-left:36px"/>
        </div>
        <select data-filter="cat" style="width:auto;padding:10px 12px;font-size:12px">
          <option value="ALL">All Categories</option>
          ${CATEGORIES.map(c => `<option value="${esc(c.name)}" ${cat === c.name ? "selected" : ""}>${esc(c.name)}</option>`).join("")}
        </select>
        <select data-filter="status" style="width:auto;padding:10px 12px;font-size:12px">
          <option value="ALL">All Status</option>
          ${["ACTIVE", "LOW STOCK", "OUT OF STOCK"].map(s => `<option ${status === s ? "selected" : ""}>${s}</option>`).join("")}
        </select>
        <button class="btn btn-ghost btn-md">${icon("filter", 14)}PRICE</button>
      </div>
      <div class="table-wrap"><table style="min-width:900px">
        <thead><tr><th>Image</th><th>Product</th><th>Category</th><th>Price</th><th>Stock</th><th>Sold</th><th>Status</th><th class="text-right">Action</th></tr></thead>
        <tbody>
          ${paged.map(p => `<tr>
            <td><div class="product-thumb">${productImage(p)}</div></td>
            <td><div class="td-display">${esc(p.name)}</div><div style="font-size:10px;color:var(--sub)">${esc(p.sku)}</div></td>
            <td class="td-sub">${esc(p.cat)}</td>
            <td class="td-display">${rp(p.price)}</td>
            <td>${p.stock}</td>
            <td>${p.sold}</td>
            <td>${badge(p.status)}</td>
            <td class="text-right">
              <div style="display:flex;justify-content:flex-end;gap:4px">
                <a href="#/products/${p.id}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:var(--sub)">${icon("eye", 14)}</a>
                <a href="#/products/${p.id}/edit" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:var(--sub)">${icon("edit", 14)}</a>
                <button data-del-product="${p.id}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:var(--sub)">${icon("trash", 14)}</button>
              </div>
            </td>
          </tr>`).join("")}
          ${paged.length === 0 ? `<tr><td colspan="8">${empty("No products match your filters.", "box")}</td></tr>` : ""}
        </tbody>
      </table></div>
      ${pagination(page, pages)}`
  })}
  </div>`;
}

function AddProductPage(editId) {
  const existing = editId ? PRODUCTS.find(p => p.id === editId) : null;
  const f = existing ? { ...existing } : {
    name: "", sku: "", cat: CATEGORIES[0].name, price: "", discount: "", stock: "",
    description: "", brand: "SYAZZ", collection: "", size: "", color: "", status: "ACTIVE"
  };
  return `<div class="page-enter">
    ${pageHead({
    eyebrow: "PRODUCTS / CATALOG CONTROL", title: existing ? "Edit Product" : "Add Product",
    sub: existing ? "Update product information." : "Create a new product listing for the SYAZZ catalog."
  })}
    <form data-product-form="${editId || "new"}" class="grid g-3-2 gap-24">
      <div style="display:flex;flex-direction:column;gap:24px">
        ${sectionCard({
    title: "Product Information", body: `
          <div class="form-grid">
            <div class="field full"><label>Product Name</label><input name="name" required value="${esc(f.name)}" placeholder="e.g. Air Pulse 1 Retro"/></div>
            <div class="field"><label>SKU</label><input name="sku" value="${esc(f.sku)}" placeholder="SYZ-BB-1000"/></div>
            <div class="field"><label>Category</label><select name="cat">${CATEGORIES.map(c => `<option ${f.cat === c.name ? "selected" : ""}>${esc(c.name)}</option>`).join("")}</select></div>
            <div class="field"><label>Price (Rp)</label><input name="price" type="number" required value="${esc(f.price)}" placeholder="2499000"/></div>
            <div class="field"><label>Discount Price (Rp)</label><input name="discount" type="number" value="${esc(f.discount)}" placeholder="Optional"/></div>
            <div class="field"><label>Stock</label><input name="stock" type="number" value="${esc(f.stock)}" placeholder="42"/></div>
            <div class="field"><label>Status</label><select name="status">${["ACTIVE", "DRAFT", "OUT OF STOCK"].map(s => `<option ${f.status === s ? "selected" : ""}>${s}</option>`).join("")}</select></div>
            <div class="field full"><label>Description</label><textarea name="description" rows="4" placeholder="Performance-driven silhouette built for...">${esc(f.description)}</textarea></div>
          </div>`})}
        ${sectionCard({
      title: "Variants", body: `
          <div class="form-grid">
            <div class="field"><label>Brand</label><input name="brand" value="${esc(f.brand)}"/></div>
            <div class="field"><label>Collection</label><input name="collection" value="${esc(f.collection)}" placeholder="Retro '26"/></div>
            <div class="field"><label>Size Range</label><input name="size" value="${esc(f.size)}" placeholder="40-45"/></div>
            <div class="field"><label>Color</label><input name="color" value="${esc(f.color)}" placeholder="Triple Black"/></div>
          </div>`})}
      </div>
      <div style="display:flex;flex-direction:column;gap:24px">
        ${sectionCard({
        title: "Upload Product Images", body: `
          <div class="upload-box">${icon("upload", 26)}<div class="upload-label">UPLOAD PRODUCT IMAGES</div><div class="upload-hint">PNG, JPG up to 5MB — multiple allowed</div></div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px">
            ${[1, 2, 3].map(() => `<div style="aspect-ratio:1/1;background:var(--bg2);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;color:var(--sub)">${icon("image", 16)}</div>`).join("")}
          </div>`})}
        <div style="display:flex;gap:12px">
          <a href="#/products" class="btn btn-ghost btn-md btn-full">CANCEL</a>
          <button type="submit" class="btn btn-primary btn-md btn-full">SAVE PRODUCT</button>
        </div>
      </div>
    </form>
  </div>`;
}

function ProductDetailPage(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return empty("Product not found.");
  return `<div class="page-enter">
    ${pageHead({
    eyebrow: `PRODUCTS / ${p.sku}`, title: p.name,
    actions: `<a href="#/products/${p.id}/edit" class="btn btn-ghost btn-md">${icon("edit", 14)}EDIT PRODUCT</a>
        <button class="btn btn-danger btn-md" data-del-product="${p.id}">${icon("trash", 14)}DELETE PRODUCT</button>`
  })}
    <div class="detail-grid">
      <div>
        <div class="detail-img-main">${productImage(p)}</div>
        <div class="detail-thumbs">${[1, 2, 3, 4].map(() => `<div class="detail-thumb">${productImage(p)}</div>`).join("")}</div>
      </div>
      <div>
        <div style="font-size:11px;color:var(--red);font-family:'Oswald',sans-serif;letter-spacing:0.1em;margin-bottom:8px">${esc(p.cat)} · ${esc(p.collection)}</div>
        <div style="font-family:'Oswald',sans-serif;font-size:30px;letter-spacing:0.03em;margin-bottom:12px">${esc(p.name)}</div>
        <div style="font-family:'Oswald',sans-serif;font-size:24px;margin-bottom:20px">${rp(p.price)}</div>
        <div class="detail-meta">
          ${[["SKU", p.sku], ["Stock", p.stock + " units"], ["Sold", p.sold + " units"], ["Brand", p.brand], ["Color", p.color], ["Sizes", p.size]].map(([k, v]) => `<div class="item"><div class="k">${k.toUpperCase()}</div><div class="v">${esc(v)}</div></div>`).join("")}
        </div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
          <span style="font-size:10px;color:var(--sub);font-family:'Oswald',sans-serif;letter-spacing:0.1em">STATUS</span>
          ${badge(p.status)}
        </div>
        <p style="color:var(--sub);font-size:14px;line-height:1.7">
          ${esc(p.description || `The ${p.name} delivers premium construction and performance-driven design, engineered for movement, energy and control. Part of the SYAZZ ${p.collection} lineup.`)}
        </p>
      </div>
    </div>
  </div>`;
}

function CategoriesPage() {
  return `<div class="page-enter">
    ${pageHead({
    eyebrow: "PRODUCTS / TAXONOMY", title: "Categories", sub: "Organize your catalog into performance categories.",
    actions: `<button class="btn btn-primary btn-md" data-new-category>${icon("plus", 14)}ADD CATEGORY</button>`
  })}
    ${sectionCard({
    body: `<div class="table-wrap"><table style="min-width:640px">
      <thead><tr><th>Category</th><th>Products</th><th>Active</th><th>Created</th><th class="text-right">Actions</th></tr></thead>
      <tbody>
        ${CATEGORIES.map(c => `<tr>
          <td class="td-display">${esc(c.name)}</td>
          <td>${c.products}</td>
          <td>${badge(c.active ? "ACTIVE" : "DRAFT")}</td>
          <td class="td-sub">${esc(c.created)}</td>
          <td class="text-right"><div style="display:flex;justify-content:flex-end;gap:4px">
            <button data-edit-category="${c.id}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:var(--sub)">${icon("edit", 14)}</button>
            <button data-del-category="${c.id}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;color:var(--sub)">${icon("trash", 14)}</button>
          </div></td>
        </tr>`).join("")}
      </tbody>
    </table></div>`})}
  </div>`;
}

function InventoryPage() {
  const low = PRODUCTS.filter(p => p.stock <= 20).length;
  const invStatus = p => p.stock === 0 ? "OUT OF STOCK" : p.stock <= 20 ? "LOW STOCK" : "IN STOCK";
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "PRODUCTS / STOCK CONTROL", title: "Inventory", sub: "Track stock levels and respond to low-inventory alerts in real time." })}
    <div class="grid g3 mb-24">
      ${statCard({ label: "Total SKUs", value: PRODUCTS.length, icon: "box" })}
      ${statCard({ label: "Low / Out of Stock", value: low, icon: "alertTriangle" })}
      ${statCard({ label: "Units in Stock", value: PRODUCTS.reduce((a, p) => a + p.stock, 0), icon: "package" })}
    </div>
    ${sectionCard({
    body: `<div class="table-wrap"><table style="min-width:900px">
      <thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>Stock</th><th>Low Stock Limit</th><th>Sold</th><th>Status</th><th class="text-right">Action</th></tr></thead>
      <tbody>
        ${PRODUCTS.map(p => `<tr>
          <td class="td-display">${esc(p.name)}</td>
          <td class="td-sub">${esc(p.sku)}</td>
          <td class="td-sub">${esc(p.cat)}</td>
          <td><span style="${p.stock <= 20 ? "color:var(--red);" : ""}font-family:'Oswald',sans-serif;display:inline-flex;align-items:center;gap:4px">
            ${p.stock <= 20 ? icon("alertTriangle", 12) : ""}${p.stock}</span></td>
          <td class="td-sub">20</td>
          <td>${p.sold}</td>
          <td>${badge(invStatus(p))}</td>
          <td class="text-right"><button data-adjust-stock="${p.id}" class="btn btn-ghost btn-sm">ADJUST</button></td>
        </tr>`).join("")}
      </tbody>
    </table></div>`})}
  </div>`;
}

function AllOrdersPage(statusFilter) {
  const tabs = ["ALL", "PAID", "PROCESSING", "SHIPPED", "COMPLETED", "CANCELLED"];
  const tab = (state.filters.orderTab || (statusFilter ? statusFilter.toUpperCase() : "ALL"));
  const page = state.page || 1;
  const perPage = 8;
  const filtered = tab === "ALL" ? ORDERS : ORDERS.filter(o => o.status === tab);
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "ORDERS / ORDER FLOW", title: statusFilter ? statusFilter + " Orders" : "All Orders", sub: "Track and manage every transaction across the store." })}
    ${sectionCard({
    body: `
      <div style="display:flex;gap:4px;margin-bottom:20px;overflow-x:auto">
        ${tabs.map(t => `<button data-order-tab="${t}" style="padding:8px 16px;font-size:11px;font-family:'Oswald',sans-serif;letter-spacing:0.05em;white-space:nowrap;border-bottom:2px solid ${tab === t ? "var(--red)" : "transparent"};color:${tab === t ? "var(--red)" : "var(--sub)"}">${t}</button>`).join("")}
      </div>
      ${ordersTable(paged, false)}
      ${paged.length === 0 ? empty("No orders in this status.", "cart") : ""}
      ${pagination(page, pages)}
    `})}
  </div>`;
}

function OrderDetailPage(id) {
  const o = ORDERS.find(x => x.id.replace("#", "") === id);
  if (!o) return empty("Order not found.");
  const flow = ["ORDERED", "PAID", "PACKED", "SHIPPED", "DELIVERED"];
  const currentIdx = o.status === "CANCELLED" ? -1 : o.status === "COMPLETED" ? 4 : o.status === "SHIPPED" ? 3 : o.status === "PROCESSING" ? 2 : 1;
  const webMarkup = `
    <div class="page-enter web-order-detail">
      ${pageHead({
    eyebrow: "ORDERS / ORDER FLOW", title: `Order ${o.id}`,
    actions: `<button class="btn btn-ghost btn-md" onclick="window.print()">${icon("printer", 14)}PRINT INVOICE</button>
          <button class="btn btn-primary btn-md" data-status-modal="${o.id}">${icon("edit", 14)}UPDATE STATUS</button>`
  })}

      <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
        ${badge(o.status)}
        <span style="color:var(--sub);font-size:12px">Placed on ${esc(o.date)} · Payment ${esc(o.paymentStatus)}</span>
      </div>

      ${o.status !== "CANCELLED" ? sectionCard({
    className: "mb-24", body: `
          <div class="order-flow">
            ${flow.map((f, i) => `
              <div class="flow-step">
                <div class="flow-dot ${i <= currentIdx ? "done" : ""}">${icon(i <= currentIdx ? "check" : "dot", 14)}</div>
                <span class="flow-lbl ${i <= currentIdx ? "done" : ""}">${f}</span>
              </div>
              ${i < flow.length - 1 ? `<div class="flow-connector ${i < currentIdx ? "done" : ""}"></div>` : ""}
            `).join("")}
          </div>`}) : sectionCard({ className: "mb-24", body: `<div style="display:flex;align-items:center;gap:8px;color:var(--red);font-family:'Oswald',sans-serif;font-size:14px">${icon("x", 16)}ORDER CANCELLED</div>` })}

      <div class="grid g-3-2 gap-24">
        <div style="display:flex;flex-direction:column;gap:24px">
          ${sectionCard({
      title: "Products", body: `
              <table><thead><tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th class="text-right">Subtotal</th></tr></thead>
              <tbody><tr><td class="td-display">${esc(o.product.name)}</td><td class="td-sub">${o.size} EU</td><td class="td-sub">${o.qty}</td><td class="td-sub">${rp(o.product.price)}</td><td class="text-right td-display">${rp(o.subtotal)}</td></tr></tbody></table>
              <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--line);max-width:320px;margin-left:auto;font-size:14px">
                <div style="display:flex;justify-content:space-between;color:var(--sub);margin-bottom:8px"><span>Subtotal</span><span>${rp(o.subtotal)}</span></div>
                <div style="display:flex;justify-content:space-between;color:var(--sub);margin-bottom:8px"><span>Shipping</span><span>${rp(o.shipping)}</span></div>
                <div style="display:flex;justify-content:space-between;color:var(--sub);margin-bottom:8px"><span>Discount</span><span>-${rp(o.discount)}</span></div>
                <div style="display:flex;justify-content:space-between;font-family:'Oswald',sans-serif;font-size:16px;padding-top:8px;border-top:1px solid var(--line)"><span>TOTAL</span><span style="color:var(--red)">${rp(o.total)}</span></div>
              </div>`})}
        </div>

        <div style="display:flex;flex-direction:column;gap:24px">
          ${sectionCard({
        title: "Customer", body: `
              <div style="font-family:'Oswald',sans-serif;font-size:14px;margin-bottom:4px">${esc(o.customer.name)}</div>
              <div style="font-size:12px;color:var(--sub);display:flex;align-items:center;gap:8px;margin-bottom:6px">${icon("mail", 12)}${esc(o.customer.email)}</div>
              <div style="font-size:12px;color:var(--sub);display:flex;align-items:center;gap:8px;margin-bottom:6px">${icon("phone", 12)}${esc(o.customer.phone)}</div>
              <div style="font-size:12px;color:var(--sub);display:flex;align-items:center;gap:8px">${icon("mapPin", 12)}${esc(o.customer.address)}</div>`
      })}

          ${sectionCard({
        title: "Payment", body: `
              <div style="font-size:12px;color:var(--sub);margin-bottom:6px">Method: <span style="color:var(--ink)">${esc(o.payment)}</span></div>
              <div style="font-size:12px;color:var(--sub);margin-bottom:6px">Status: <span style="color:var(--ink)">${esc(o.paymentStatus)}</span></div>
              <div style="font-size:12px;color:var(--sub)">Transaction ID: <span style="color:var(--ink)">${esc(o.txId)}</span></div>`
      })}
        </div>
      </div>
    </div>
  `;

  const printMarkup = `
    <div class="invoice-print-sheet invoice-only-print">
      <div class="invoice-print-inner">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid rgba(17,17,17,0.12)">
          <div>
            <div style="font-family:'Oswald',sans-serif;font-size:28px;letter-spacing:0.08em;margin-bottom:4px">SYAZZ</div>
            <div style="font-size:10px;letter-spacing:0.18em;color:var(--sub);text-transform:uppercase">Invoice / Order Receipt</div>
          </div>
          <div style="text-align:right;font-size:11px;color:var(--sub);line-height:1.7">
            <div>Jl. Sudirman Kav. 52, Jakarta Selatan</div>
            <div>+62 21 5550 1928</div>
            <div>hello@syazz.com</div>
          </div>
        </div>

        <div style="display:flex;justify-content:space-between;align-items:center;gap:20px;margin-bottom:18px;padding:16px;background:rgba(241,241,241,0.7);border:1px solid rgba(17,17,17,0.12)">
          <div>
            <div style="font-size:10px;color:var(--sub);letter-spacing:0.14em;text-transform:uppercase;margin-bottom:6px">Invoice No.</div>
            <div style="font-family:'Oswald',sans-serif;font-size:22px;letter-spacing:0.04em">${esc(o.id)}</div>
          </div>
          <div style="display:flex;gap:28px;flex-wrap:wrap;justify-content:flex-end">
            <div>
              <div style="font-size:10px;color:var(--sub);letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px">Order Date</div>
              <div style="font-size:12px;font-weight:600">${esc(o.date)}</div>
            </div>
            <div>
              <div style="font-size:10px;color:var(--sub);letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px">Payment</div>
              <div style="font-size:12px;font-weight:600">${esc(o.payment)}</div>
            </div>
            <div>
              <div style="font-size:10px;color:var(--sub);letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px">Status</div>
              <div style="font-size:12px;font-weight:600">${badge(o.status)}</div>
            </div>
          </div>
        </div>

        <div style="display:flex;align-items:center;gap:12px;margin-bottom:24px">
          ${badge(o.status)}
          <span style="color:var(--sub);font-size:12px">Placed on ${esc(o.date)} · Payment ${esc(o.paymentStatus)}</span>
        </div>

        ${o.status !== "CANCELLED" ? sectionCard({
    className: "mb-24", body: `
            <div class="order-flow">
              ${flow.map((f, i) => `
                <div class="flow-step">
                  <div class="flow-dot ${i <= currentIdx ? "done" : ""}">${icon(i <= currentIdx ? "check" : "dot", 14)}</div>
                  <span class="flow-lbl ${i <= currentIdx ? "done" : ""}">${f}</span>
                </div>
                ${i < flow.length - 1 ? `<div class="flow-connector ${i < currentIdx ? "done" : ""}"></div>` : ""}
              `).join("")}
            </div>`}) : sectionCard({ className: "mb-24", body: `<div style="display:flex;align-items:center;gap:8px;color:var(--red);font-family:'Oswald',sans-serif;font-size:14px">${icon("x", 16)}ORDER CANCELLED</div>` })}

        <div class="grid g-3-2 gap-24">
          <div style="display:flex;flex-direction:column;gap:24px">
            ${sectionCard({
      title: "Products", body: `
                <table><thead><tr><th>Product</th><th>Size</th><th>Qty</th><th>Price</th><th class="text-right">Subtotal</th></tr></thead>
                <tbody><tr><td class="td-display">${esc(o.product.name)}</td><td class="td-sub">${o.size} EU</td><td class="td-sub">${o.qty}</td><td class="td-sub">${rp(o.product.price)}</td><td class="text-right td-display">${rp(o.subtotal)}</td></tr></tbody></table>
                <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--line);max-width:320px;margin-left:auto;font-size:14px">
                  <div style="display:flex;justify-content:space-between;color:var(--sub);margin-bottom:8px"><span>Subtotal</span><span>${rp(o.subtotal)}</span></div>
                  <div style="display:flex;justify-content:space-between;color:var(--sub);margin-bottom:8px"><span>Shipping</span><span>${rp(o.shipping)}</span></div>
                  <div style="display:flex;justify-content:space-between;color:var(--sub);margin-bottom:8px"><span>Discount</span><span>-${rp(o.discount)}</span></div>
                  <div style="display:flex;justify-content:space-between;font-family:'Oswald',sans-serif;font-size:16px;padding-top:8px;border-top:1px solid var(--line)"><span>TOTAL</span><span style="color:var(--red)">${rp(o.total)}</span></div>
                </div>`})}
          </div>

          <div style="display:flex;flex-direction:column;gap:24px">
            ${sectionCard({
        title: "Customer & Delivery", body: `
                <div style="font-family:'Oswald',sans-serif;font-size:14px;margin-bottom:6px">${esc(o.customer.name)}</div>
                <div style="font-size:12px;color:var(--sub);display:flex;align-items:center;gap:8px;margin-bottom:6px">${icon("mail", 12)}${esc(o.customer.email)}</div>
                <div style="font-size:12px;color:var(--sub);display:flex;align-items:center;gap:8px;margin-bottom:6px">${icon("phone", 12)}${esc(o.customer.phone)}</div>
                <div style="font-size:12px;color:var(--sub);display:flex;align-items:center;gap:8px;margin-bottom:12px">${icon("mapPin", 12)}${esc(o.customer.address)}</div>
                <div style="padding-top:12px;border-top:1px solid rgba(17,17,17,0.12);font-size:12px;color:var(--sub);line-height:1.8">
                  <div><strong style="color:var(--ink)">City:</strong> ${esc(o.customer.city)}</div>
                  <div><strong style="color:var(--ink)">Shipping:</strong> ${esc(o.payment === "QRIS" ? "Standard Delivery" : "Courier Shipment")}</div>
                  <div><strong style="color:var(--ink)">Notes:</strong> Please deliver before 18:00</div>
                </div>`
      })}

            ${sectionCard({
        title: "Payment Details", body: `
                <div style="font-size:12px;color:var(--sub);margin-bottom:8px"><strong style="color:var(--ink)">Method:</strong> ${esc(o.payment)}</div>
                <div style="font-size:12px;color:var(--sub);margin-bottom:8px"><strong style="color:var(--ink)">Status:</strong> ${esc(o.paymentStatus)}</div>
                <div style="font-size:12px;color:var(--sub);margin-bottom:8px"><strong style="color:var(--ink)">Transaction ID:</strong> ${esc(o.txId)}</div>
                <div style="font-size:12px;color:var(--sub)"><strong style="color:var(--ink)">Buyer:</strong> ${esc(o.customer.name)}</div>`
      })}
          </div>
        </div>

        <div style="margin-top:24px;padding-top:18px;border-top:1px solid rgba(17,17,17,0.15);display:flex;justify-content:space-between;align-items:flex-end;gap:20px;flex-wrap:wrap">
          <div style="font-size:11px;color:var(--sub);line-height:1.8">
            <div><strong style="color:var(--ink)">Terms:</strong> Payment is due on receipt.</div>
            <div><strong style="color:var(--ink)">Thank you for shopping with SYAZZ.</strong></div>
          </div>
          <div style="text-align:right;min-width:220px">
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--sub);margin-bottom:8px"><span>Subtotal</span><span>${rp(o.subtotal)}</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--sub);margin-bottom:8px"><span>Shipping</span><span>${rp(o.shipping)}</span></div>
            <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--sub);margin-bottom:8px"><span>Discount</span><span>-${rp(o.discount)}</span></div>
            <div style="display:flex;justify-content:space-between;font-family:'Oswald',sans-serif;font-size:18px;padding-top:8px;border-top:1px solid rgba(17,17,17,0.15)"><span>TOTAL</span><span style="color:var(--red)">${rp(o.total)}</span></div>
          </div>
        </div>
      </div>
    </div>
  `;

  return `${webMarkup}${printMarkup}`;
}

function AllCustomersPage() {
  const q = (state.filters.custQ || "").toLowerCase();
  const page = state.page || 1;
  const perPage = 8;
  const filtered = CUSTOMERS.filter(c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q));
  const pages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "CUSTOMERS / ACCOUNT CONTROL", title: "All Customers", sub: "View and manage everyone who shops with SYAZZ." })}
    ${sectionCard({
    body: `
      <div style="position:relative;max-width:384px;margin-bottom:20px">
        ${icon("search", 14)}
        <input data-filter="custQ" value="${esc(q)}" placeholder="Search customers..." style="padding-left:36px"/>
      </div>
      <div class="table-wrap"><table style="min-width:760px">
        <thead><tr><th>Customer</th><th>Email</th><th>Orders</th><th>Total Spent</th><th>Last Order</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${paged.map(c => `<tr data-customer-row="${c.id}" style="cursor:pointer">
            <td><div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;background:var(--bg2);border:1px solid var(--line);overflow:hidden;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <img src="${esc(c.avatar)}" alt="${esc(c.name)}" style="width:100%;height:100%;object-fit:cover;display:block" />
              </div>
              <span class="td-display">${esc(c.name)}</span>
            </div></td>
            <td class="td-sub">${esc(c.email)}</td>
            <td>${c.orders}</td>
            <td class="td-display">${rp(c.spent)}</td>
            <td class="td-sub">${esc(c.lastOrder)}</td>
            <td>${badge(c.status)}</td>
            <td class="text-right td-sub">${icon("chevronRight", 14)}</td>
          </tr>`).join("")}
        </tbody>
      </table></div>
      ${pagination(page, pages)}
    `})}
  </div>`;
}

function CustomerDetailPage(id) {
  const c = CUSTOMERS.find(x => x.id === id) || CUSTOMERS[0];
  const custOrders = ORDERS.filter(o => o.customer.id === c.id);
  const favProducts = [...new Map(custOrders.map(o => [o.product.id, o.product])).values()].slice(0, 3);
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "CUSTOMERS / ACCOUNT PROFILE", title: c.name })}
    <div class="grid g-3-2 gap-24 mb-24">
      ${sectionCard({
    body: `
        <div style="width:64px;height:64px;border-radius:50%;overflow:hidden;background:var(--bg2);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;margin-bottom:16px">
          <img src="${esc(c.avatar)}" alt="${esc(c.name)}" style="width:100%;height:100%;object-fit:cover;display:block" />
        </div>
        <div style="font-family:'Oswald',sans-serif;font-size:18px;margin-bottom:4px">${esc(c.name)}</div>
        ${badge(c.status)}
        <div style="margin-top:20px;display:flex;flex-direction:column;gap:10px;font-size:12px">
          <div style="display:flex;align-items:center;gap:8px;color:var(--sub)">${icon("mail", 13)}${esc(c.email)}</div>
          <div style="display:flex;align-items:center;gap:8px;color:var(--sub)">${icon("phone", 13)}${esc(c.phone)}</div>
          <div style="display:flex;align-items:center;gap:8px;color:var(--sub)">${icon("mapPin", 13)}${esc(c.address)}</div>
        </div>`})}
      <div class="grid g3 gap-24">
        ${statCard({ label: "Total Orders", value: c.orders, icon: "cart" })}
        ${statCard({ label: "Total Spent", value: rp(c.spent).replace("Rp ", ""), icon: "bar" })}
        ${statCard({ label: "Last Order", value: c.lastOrder.split(" ")[0] + " " + c.lastOrder.split(" ")[1], icon: "calendar" })}
      </div>
    </div>
    <div class="grid g-3-2 gap-24">
      ${sectionCard({
      title: "Recent Orders", body: `
        ${ordersTable(custOrders.slice(0, 6), true)}
        ${custOrders.length === 0 ? empty("No orders yet.", "cart") : ""}`
    })}
      ${sectionCard({
      title: "Favorite Products", body: `
        <div style="display:flex;flex-direction:column;gap:12px">
          ${favProducts.map(p => `<div style="display:flex;align-items:center;gap:12px">
            <div class="product-thumb" style="width:40px;height:40px">${productImage(p)}</div>
            <div style="min-width:0"><div style="font-size:12px;font-family:'Oswald',sans-serif;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.name)}</div><div style="font-size:10px;color:var(--sub)">${rp(p.price)}</div></div>
          </div>`).join("")}
        </div>`})}
    </div>
  </div>`;
}

function RevenueAnalyticsPage() {
  const totalRev = REVENUE_SERIES_30.reduce((a, b) => a + b, 0);
  const refunds = Math.round(totalRev * 0.021);
  const net = totalRev - refunds;
  const breakdown = [
    { label: "Product Sales", value: 92 }, { label: "Discounts", value: -8 },
    { label: "Shipping", value: 4 }, { label: "Tax", value: 6 }, { label: "Refunds", value: -2 },
  ];
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "ANALYTICS / REVENUE CONTROL", title: "Revenue", sub: "Full breakdown of revenue, refunds and net earnings." })}
    <div class="grid g4 mb-24">
      ${statCard({ label: "Total Revenue", value: "Rp " + Math.round(totalRev / 1e6) + "M", delta: "+24.8%", icon: "bar" })}
      ${statCard({ label: "Net Revenue", value: "Rp " + Math.round(net / 1e6) + "M", delta: "+22.1%", icon: "check" })}
      ${statCard({ label: "Refunds", value: rp(refunds), delta: "-1.2%", icon: "arrowDownRight" })}
      ${statCard({ label: "Avg Order Value", value: rp(totalRev / ORDERS_SERIES_30.reduce((a, b) => a + b, 0)), delta: "+9.8%", icon: "package" })}
    </div>
    ${sectionCard({ title: "Revenue Trend", className: "mb-24", body: lineChart(REVENUE_SERIES_30, DAY_LABELS_30, 260, v => "Rp" + Math.round(v / 1000000) + "M") })}
    ${sectionCard({
    title: "Revenue Breakdown", body: breakdown.map(b => `
      <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(41,32,32,0.6)">
        <span style="font-family:'Oswald',sans-serif;font-size:14px;letter-spacing:0.03em">${b.label.toUpperCase()}</span>
        <span style="font-family:'Oswald',sans-serif;color:${b.value < 0 ? "var(--red)" : "var(--ink)"}">${b.value > 0 ? "+" : ""}${b.value}%</span>
      </div>`).join("")
  })}
  </div>`;
}

function SalesAnalyticsDetailPage() {
  const topProducts = [...PRODUCTS].sort((a, b) => b.sold - a.sold).slice(0, 5);
  const catTotals = CATEGORIES.map(c => ({ label: c.name, value: PRODUCTS.filter(p => p.cat === c.name).reduce((a, p) => a + p.sold, 0) })).sort((a, b) => b.value - a.value);
  const byMonth = [
    { label: "Apr", value: 612 }, { label: "May", value: 704 }, { label: "Jun", value: 655 },
    { label: "Jul", value: 812 }, { label: "Aug", value: 940 }, { label: "Sep", value: 1023 },
  ];
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "ANALYTICS / SALES CONTROL", title: "Sales", sub: "Understand what's selling, where, and how fast." })}
    <div class="grid g2 gap-24 mb-24">
      ${sectionCard({
    title: "Top Products", body: `<div style="display:flex;flex-direction:column;gap:16px">
        ${topProducts.map((p, i) => `<div style="display:flex;align-items:center;gap:12px">
          <span style="font-family:'Oswald',sans-serif;color:var(--sub);width:20px">${i + 1}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-family:'Oswald',sans-serif;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(p.name)}</div>
            <div style="height:4px;background:rgba(41,32,32,0.6);margin-top:6px"><div style="height:100%;background:var(--red);width:${(p.sold / topProducts[0].sold * 100)}%"></div></div>
          </div>
          <span style="font-size:12px;color:var(--sub);width:64px;text-align:right">${p.sold} sold</span>
        </div>`).join("")}
      </div>`})}
      ${sectionCard({ title: "Top Categories", body: catTotals.map(c => barRow(c.label, c.value, catTotals[0].value, "")).join("") })}
    </div>
    <div class="grid g2 gap-24">
      ${sectionCard({ title: "Sales by Day", body: lineChart(ORDERS_SERIES_30, DAY_LABELS_30, 200, v => Math.round(v)) })}
      ${sectionCard({ title: "Sales by Month", body: vBarChart(byMonth, 200) })}
    </div>
  </div>`;
}

function TrafficAnalyticsPage() {
  const visitorSeries = genSeries(30, 2100, 500, 8);
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "ANALYTICS / TRAFFIC CONTROL", title: "Traffic", sub: "Where SYAZZ visitors come from and how they convert." })}
    <div class="grid g4 mb-24">
      ${statCard({ label: "Total Visitors", value: "63.2K", delta: "+11.3%", icon: "users" })}
      ${statCard({ label: "Unique Visitors", value: "48.9K", delta: "+9.7%", icon: "users" })}
      ${statCard({ label: "Page Views", value: "211K", delta: "+14.2%", icon: "eye" })}
      ${statCard({ label: "Conversion Rate", value: "1.9%", delta: "-3.0%", icon: "percent" })}
    </div>
    ${sectionCard({ title: "Visitors Trend", className: "mb-24", body: lineChart(visitorSeries, DAY_LABELS_30, 260, v => Math.round(v)) })}
    ${sectionCard({ title: "Traffic Sources", body: TRAFFIC_SOURCES.map(s => barRow(s.name, s.value, Math.max(...TRAFFIC_SOURCES.map(t => t.value)))).join("") })}
  </div>`;
}

function CouponsPage() {
  return `<div class="page-enter">
    ${pageHead({
    eyebrow: "PROMOTIONS / DISCOUNT CONTROL", title: "Coupons", sub: "Create and manage discount codes across the storefront.",
    actions: `<button class="btn btn-primary btn-md" data-new-coupon>${icon("plus", 14)}CREATE COUPON</button>`
  })}
    <div class="coupon-grid">
      ${COUPONS.map(c => `<div class="coupon">
        <div class="coupon-head">
          <span class="coupon-code">${esc(c.code)}</span>
          ${badge(c.status)}
        </div>
        <div class="coupon-amount">${c.type === "PERCENT" ? c.amount + "% OFF" : rp(c.amount) + " OFF"}</div>
        <div class="coupon-meta">
          <div>Min. purchase ${rp(c.min)}</div>
          <div>Max discount ${rp(c.max)}</div>
          <div>${esc(c.start)} — ${esc(c.end)}</div>
          <div>${c.used} / ${c.limit} used</div>
        </div>
        <div class="coupon-progress"><div class="fill" style="width:${Math.min(100, c.used / c.limit * 100)}%"></div></div>
        <div class="coupon-actions">
          <button data-toggle-coupon="${c.code}">${c.status === "ACTIVE" ? "DISABLE" : "ENABLE"}</button>
          <button class="btn-icon" data-del-coupon="${c.code}" style="display:flex;align-items:center;justify-content:center;border:1px solid var(--line)">${icon("trash", 13)}</button>
        </div>
      </div>`).join("")}
    </div>
  </div>`;
}

function BannersPage() {
  return `<div class="page-enter">
    ${pageHead({
    eyebrow: "PROMOTIONS / CAMPAIGN CONTROL", title: "Banners", sub: "Manage homepage and campaign banner placements.",
    actions: `<button class="btn btn-primary btn-md" data-new-banner>${icon("plus", 14)}ADD BANNER</button>`
  })}
    <div style="display:flex;flex-direction:column;gap:16px">
      ${BANNERS.map(b => `<div class="banner-item">
        <div class="banner-thumb diagonals">
          <img src="${esc(b.image)}" alt="${esc(b.title)}" style="width:100%;height:100%;object-fit:cover;display:block;filter:brightness(0.82);" />
          <span class="accent">${esc(b.accent)}</span>
        </div>
        <div class="banner-body">
          <div class="banner-head">
            <div>
              <div class="banner-title">${esc(b.title)}</div>
              <div class="banner-campaign">${esc(b.campaign)}</div>
            </div>
            ${badge(b.status)}
          </div>
          <div class="banner-date">${icon("calendar", 13)}${esc(b.start)} — ${esc(b.end)}</div>
          <div class="banner-actions">
            <button class="btn">${icon("edit", 12)}EDIT</button>
            <button class="btn" data-del-banner="${b.id}">${icon("trash", 12)}DELETE</button>
          </div>
        </div>
      </div>`).join("")}
    </div>
  </div>`;
}

function SettingsPage() {
  const tab = state.filters.settingsTab || "STORE";
  const tabs = ["STORE", "PAYMENT", "SHIPPING", "ADMIN"];
  return `<div class="page-enter">
    ${pageHead({ eyebrow: "SYSTEM / STORE CONTROL", title: "Settings", sub: "Configure your store, payments, shipping and admin profile." })}
    <div class="tabs">
      ${tabs.map(t => `<button class="tab ${tab === t ? "active" : ""}" data-settings-tab="${t}">${t} SETTINGS</button>`).join("")}
    </div>
    ${tab === "STORE" ? `<div style="max-width:672px">
      ${sectionCard({
    title: "Store Settings", body: `
        <div class="form-grid">
          <div class="field"><label>Store Name</label><input value="SYAZZ"/></div>
          <div class="field"><label>Store Email</label><input value="hello@syazz.com"/></div>
          <div class="field"><label>Phone</label><input value="021-5550-1928"/></div>
          <div class="field full"><label>Address</label><input value="Jl. Sudirman Kav. 52, Jakarta Selatan"/></div>
        </div>
        <button class="btn btn-primary btn-md" data-save-settings>SAVE CHANGES</button>`})}
    </div>`: ""}
    ${tab === "PAYMENT" ? `<div style="max-width:672px;display:flex;flex-direction:column;gap:24px">
      ${sectionCard({
      title: "Payment Methods", body: ["QRIS", "Bank Transfer BCA", "Bank Transfer BNI", "GoPay", "OVO", "Credit Card"].map(m => `
        <div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(41,32,32,0.6)">
          <span style="font-family:'Oswald',sans-serif;font-size:14px">${m}</span>${badge("ACTIVE")}
        </div>`).join("")
    })}
      ${sectionCard({
      title: "Bank Accounts", body: `
        <div style="font-family:'Oswald',sans-serif;font-size:14px;margin-bottom:4px">BCA — PT SYAZZ PERFORMANCE INDONESIA</div>
        <div style="font-size:12px;color:var(--sub)">Account No. 8210 4471 992</div>`})}
    </div>`: ""}
    ${tab === "SHIPPING" ? `<div style="max-width:672px">
      ${sectionCard({
        title: "Shipping Methods", body: [
          ["JNE Regular", "Rp 18.000 — Rp 35.000"],
          ["JNE Express (YES)", "Rp 32.000 — Rp 60.000"],
          ["GoSend Same Day", "Rp 25.000 flat"],
          ["SiCepat", "Rp 15.000 — Rp 30.000"],
        ].map(([m, f]) => `<div style="display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(41,32,32,0.6)">
        <span style="font-family:'Oswald',sans-serif;font-size:14px">${m}</span>
        <span style="font-size:12px;color:var(--sub)">${f}</span>
      </div>`).join("")
      })}
    </div>`: ""}
    ${tab === "ADMIN" ? `<div style="max-width:672px;display:flex;flex-direction:column;gap:24px">
      ${sectionCard({
        title: "Profile", body: `<div class="form-grid">
        <div class="field"><label>Admin Name</label><input value="Admin Ganteng"/></div>
        <div class="field"><label>Email</label><input value="admin@syazz.com"/></div>
      </div>`})}
      ${sectionCard({
          title: "Password", body: `<div class="form-grid">
        <div class="field"><label>New Password</label><input type="password" placeholder="••••••••"/></div>
        <div class="field"><label>Confirm Password</label><input type="password" placeholder="••••••••"/></div>
      </div>`})}
      ${sectionCard({
            title: "Notifications", body: ["New order alerts", "Low stock alerts", "Customer messages", "Weekly performance report"].map(n => `
        <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(41,32,32,0.6)">
          <span style="font-size:14px">${n}</span>
          <div style="width:40px;height:20px;background:var(--red);position:relative;cursor:pointer"><div style="width:16px;height:16px;background:var(--ink);position:absolute;right:2px;top:2px"></div></div>
        </div>`).join("")
          })}
      <button class="btn btn-primary btn-md" data-save-settings>SAVE CHANGES</button>
    </div>`: ""}
  </div>`;
}

/* =========================================================
   ROUTER
   ========================================================= */
function renderPage() {
  const hash = state.hash;
  const parts = hash.replace(/^#\//, "").split("?")[0].split("/").filter(Boolean);
  let page, title = "Overview", crumb = "CONTROL CENTER / DASHBOARD";

  if (parts.length === 0) { page = Overview(); title = "Overview"; }
  else if (parts[0] === "dashboard" && parts[1] === "sales") { page = SalesAnalyticsPage(); title = "Sales Analytics"; }
  else if (parts[0] === "dashboard" && parts[1] === "recent-orders") { page = RecentOrdersPage(); title = "Recent Orders"; }
  else if (parts[0] === "dashboard" && parts[1] === "best-sellers") { page = BestSellersPage(); title = "Best Sellers"; }
  else if (parts[0] === "products" && parts[1] === "new") { page = AddProductPage(); title = "Add Product"; crumb = "CONTROL CENTER / PRODUCTS"; }
  else if (parts[0] === "products" && parts[2] === "edit") { page = AddProductPage(parts[1]); title = "Edit Product"; crumb = "CONTROL CENTER / PRODUCTS"; }
  else if (parts[0] === "products" && parts[1]) { page = ProductDetailPage(parts[1]); title = "Product Detail"; crumb = "CONTROL CENTER / PRODUCTS"; }
  else if (parts[0] === "products") { page = AllProductsPage(); title = "All Products"; crumb = "CONTROL CENTER / PRODUCTS"; }
  else if (parts[0] === "categories") { page = CategoriesPage(); title = "Categories"; crumb = "CONTROL CENTER / PRODUCTS"; }
  else if (parts[0] === "inventory") { page = InventoryPage(); title = "Inventory"; crumb = "CONTROL CENTER / PRODUCTS"; }
  else if (parts[0] === "orders" && parts[1] === "detail") { page = OrderDetailPage(parts[2]); title = "Order Detail"; crumb = "CONTROL CENTER / ORDERS"; }
  else if (parts[0] === "orders" && parts[1]) { page = AllOrdersPage(parts[1]); title = parts[1][0].toUpperCase() + parts[1].slice(1); crumb = "CONTROL CENTER / ORDERS"; }
  else if (parts[0] === "orders") { page = AllOrdersPage(); title = "All Orders"; crumb = "CONTROL CENTER / ORDERS"; }
  else if (parts[0] === "customers" && parts[1]) { page = CustomerDetailPage(parts[1]); title = "Customer Detail"; crumb = "CONTROL CENTER / CUSTOMERS"; }
  else if (parts[0] === "customers") { page = AllCustomersPage(); title = "All Customers"; crumb = "CONTROL CENTER / CUSTOMERS"; }
  else if (parts[0] === "analytics" && parts[1] === "revenue") { page = RevenueAnalyticsPage(); title = "Revenue"; crumb = "CONTROL CENTER / ANALYTICS"; }
  else if (parts[0] === "analytics" && parts[1] === "sales") { page = SalesAnalyticsDetailPage(); title = "Sales"; crumb = "CONTROL CENTER / ANALYTICS"; }
  else if (parts[0] === "analytics" && parts[1] === "traffic") { page = TrafficAnalyticsPage(); title = "Traffic"; crumb = "CONTROL CENTER / ANALYTICS"; }
  else if (parts[0] === "promotions" && parts[1] === "coupons") { page = CouponsPage(); title = "Coupons"; crumb = "CONTROL CENTER / PROMOTIONS"; }
  else if (parts[0] === "promotions" && parts[1] === "banners") { page = BannersPage(); title = "Banners"; crumb = "CONTROL CENTER / PROMOTIONS"; }
  else if (parts[0] === "settings") { page = SettingsPage(); title = "Settings"; crumb = "CONTROL CENTER / SYSTEM"; }
  else { page = Overview(); title = "Overview"; }

  return { page, title, crumb };
}

/* =========================================================
   MODALS
   ========================================================= */
function renderModals() {
  const m = state.modal;
  if (!m) return "";
  if (m.type === "confirm-del-product") {
    const p = PRODUCTS.find(x => x.id === m.id);
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>Delete Product</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <p style="color:var(--sub);font-size:14px;margin-bottom:24px">Are you sure you want to delete <span style="color:var(--ink)">${esc(p?.name)}</span>? This action cannot be undone.</p>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-danger btn-md btn-full" data-confirm-del-product="${m.id}">DELETE PRODUCT</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "category") {
    const editing = m.data;
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>${editing ? "Edit Category" : "Add Category"}</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <div class="field"><label>Category Name</label><input data-category-name value="${esc(editing ? editing.name : "")}" placeholder="e.g. SKATEBOARDING"/></div>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-primary btn-md btn-full" data-save-category="${editing ? editing.id : ""}">${editing ? "SAVE CHANGES" : "ADD CATEGORY"}</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "confirm-del-category") {
    const c = CATEGORIES.find(x => x.id === m.id);
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>Delete Category</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <p style="color:var(--sub);font-size:14px;margin-bottom:24px">Delete <span style="color:var(--ink)">${esc(c?.name)}</span>? Products inside will remain uncategorized.</p>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-danger btn-md btn-full" data-confirm-del-category="${m.id}">DELETE</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "stock-adjust") {
    const p = PRODUCTS.find(x => x.id === m.id);
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>Stock Adjustment</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <p style="font-size:12px;color:var(--sub);margin-bottom:16px">${esc(p?.name)} — current stock: <span style="color:var(--ink)">${p?.stock}</span> units</p>
        <div class="field"><label>Adjustment (+/-)</label><input data-stock-amt type="number" value="0" placeholder="e.g. 10 or -5"/></div>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-primary btn-md btn-full" data-apply-stock="${m.id}">APPLY ADJUSTMENT</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "order-status") {
    const o = ORDERS.find(x => x.id === m.id);
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>Update Order Status</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <div class="field"><label>Status</label><select data-order-status>${STATUSES.map(s => `<option ${o?.status === s ? "selected" : ""}>${s}</option>`).join("")}</select></div>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-primary btn-md btn-full" data-apply-order-status="${m.id}">UPDATE STATUS</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "coupon") {
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal wide"><div class="modal-head"><h3>Create Coupon</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <div class="form-grid">
          <div class="field"><label>Coupon Code</label><input data-coupon="code" placeholder="SYAZZ25"/></div>
          <div class="field"><label>Discount Type</label><select data-coupon="type"><option value="PERCENT">Percentage</option><option value="FIXED">Fixed Amount</option></select></div>
          <div class="field"><label>Discount Amount</label><input data-coupon="amount" type="number" placeholder="10"/></div>
          <div class="field"><label>Minimum Purchase (Rp)</label><input data-coupon="min" type="number" placeholder="500000"/></div>
          <div class="field"><label>Maximum Discount (Rp)</label><input data-coupon="max" type="number" placeholder="300000"/></div>
          <div class="field"><label>Usage Limit</label><input data-coupon="limit" type="number" placeholder="500"/></div>
          <div class="field"><label>Start Date</label><input data-coupon="start" type="date"/></div>
          <div class="field"><label>End Date</label><input data-coupon="end" type="date"/></div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-primary btn-md btn-full" data-save-coupon>CREATE COUPON</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "confirm-del-coupon") {
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>Delete Coupon</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <p style="color:var(--sub);font-size:14px;margin-bottom:24px">Delete coupon <span style="color:var(--ink)">${esc(m.code)}</span>?</p>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-danger btn-md btn-full" data-confirm-del-coupon="${m.code}">DELETE</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "banner") {
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>Add Banner</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <div class="field"><label>Banner Title</label><input data-banner="title" placeholder="SPEED SEASON — NEW DROP"/></div>
        <div class="form-grid">
          <div class="field"><label>Campaign</label><input data-banner="campaign" placeholder="Velocity Launch"/></div>
          <div></div>
          <div class="field"><label>Start Date</label><input data-banner="start" type="date"/></div>
          <div class="field"><label>End Date</label><input data-banner="end" type="date"/></div>
        </div>
        <div class="field"><label>Upload Banner Image</label>
          <div class="upload-box">${icon("upload", 22)}<div class="upload-hint">Click to upload (1600×600 recommended)</div></div>
        </div>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-primary btn-md btn-full" data-save-banner>ADD BANNER</button>
        </div>
      </div></div></div>`;
  }
  if (m.type === "confirm-del-banner") {
    const b = BANNERS.find(x => x.id === m.id);
    return `<div class="modal-backdrop"><div class="modal-mask" data-close-modal></div>
      <div class="modal"><div class="modal-head"><h3>Delete Banner</h3><button class="modal-close" data-close-modal>${icon("x", 18)}</button></div>
      <div class="modal-body">
        <p style="color:var(--sub);font-size:14px;margin-bottom:24px">Delete banner <span style="color:var(--ink)">${esc(b?.title)}</span>?</p>
        <div class="modal-actions">
          <button class="btn btn-ghost btn-md btn-full" data-close-modal>CANCEL</button>
          <button class="btn btn-danger btn-md btn-full" data-confirm-del-banner="${m.id}">DELETE</button>
        </div>
      </div></div></div>`;
  }
  return "";
}

/* =========================================================
   TOAST
   ========================================================= */
function renderToast() {
  if (!state.toast) return "";
  return `<div class="toast">
    <div class="toast-icon">${icon("check", 14)}</div>
    <div class="toast-msg">${esc(state.toast)}</div>
  </div>`;
}

/* =========================================================
   RENDER
   ========================================================= */
function render() {
  const { page, title, crumb } = renderPage();
  const root = document.getElementById("root");
  root.innerHTML = `
    <div class="app">
      ${sidebar()}
      <div class="main-wrap diagonals-soft">
        ${header(title, crumb)}
        <main class="main">${page}</main>
        <footer class="footer">SYAZZ CONTROL © 2026 — PERFORMANCE COMMERCE</footer>
      </div>
    </div>
    ${renderModals()}
    ${renderToast()}
  `;
  bindEvents();
}

/* =========================================================
   EVENTS
   ========================================================= */
function bindEvents() {
  const root = document.getElementById("root");

  // Sidebar
  root.querySelectorAll("[data-open-sidebar]").forEach(el => el.onclick = () => { state.mobileOpen = true; render(); });
  root.querySelectorAll("[data-close-sidebar]").forEach(el => el.onclick = () => {
    if (el.tagName === "A") { state.mobileOpen = false; setTimeout(render, 0); }
    else { state.mobileOpen = false; render(); }
  });

  // Notif / profile
  const tn = root.querySelector("[data-toggle-notif]");
  if (tn) tn.onclick = (e) => { e.stopPropagation(); state.notifOpen = !state.notifOpen; state.profileOpen = false; render(); };
  const tp = root.querySelector("[data-toggle-profile]");
  if (tp) tp.onclick = (e) => { e.stopPropagation(); state.profileOpen = !state.profileOpen; state.notifOpen = false; render(); };

  // Close dropdowns on outside click
  document.onclick = (e) => {
    if (!e.target.closest("[data-dropdown]") && !e.target.closest("[data-toggle-notif]") && !e.target.closest("[data-toggle-profile]")) {
      if (state.notifOpen || state.profileOpen) { state.notifOpen = false; state.profileOpen = false; render(); }
    }
  };

  // Filters
  root.querySelectorAll("[data-filter]").forEach(el => {
    el.oninput = (e) => {
      const k = e.target.getAttribute("data-filter");
      state.filters[k] = e.target.value;
      state.page = 1;
      render();
      const again = document.querySelector(`[data-filter="${k}"]`);
      if (again) { again.focus(); again.selectionStart = again.value.length; }
    };
  });

  // Range buttons
  root.querySelectorAll("[data-range]").forEach(el => {
    el.onclick = () => { state.filters.range = el.getAttribute("data-range"); render(); };
  });

  // Settings tabs
  root.querySelectorAll("[data-settings-tab]").forEach(el => {
    el.onclick = () => { state.filters.settingsTab = el.getAttribute("data-settings-tab"); render(); };
  });

  // Order tabs
  root.querySelectorAll("[data-order-tab]").forEach(el => {
    el.onclick = () => { state.filters.orderTab = el.getAttribute("data-order-tab"); state.page = 1; render(); };
  });

  // Pagination
  root.querySelectorAll("[data-page]").forEach(el => {
    el.onclick = () => {
      const p = parseInt(el.getAttribute("data-page"));
      if (p >= 1) { state.page = p; render(); window.scrollTo(0, 0); }
    };
  });

  // Customer row click
  root.querySelectorAll("[data-customer-row]").forEach(el => {
    el.onclick = () => { window.location.hash = "#/customers/" + el.getAttribute("data-customer-row"); };
  });

  // Delete product
  root.querySelectorAll("[data-del-product]").forEach(el => {
    el.onclick = (e) => { e.preventDefault(); state.modal = { type: "confirm-del-product", id: el.getAttribute("data-del-product") }; render(); };
  });
  root.querySelectorAll("[data-confirm-del-product]").forEach(el => {
    el.onclick = () => {
      const id = el.getAttribute("data-confirm-del-product");
      PRODUCTS = PRODUCTS.filter(p => p.id !== id);
      state.modal = null; toast("Product deleted");
      if (state.hash.startsWith("#/products/")) window.location.hash = "#/products";
      else render();
    };
  });

  // Categories
  root.querySelectorAll("[data-new-category]").forEach(el => {
    el.onclick = () => { state.modal = { type: "category" }; render(); };
  });
  root.querySelectorAll("[data-edit-category]").forEach(el => {
    el.onclick = () => {
      const c = CATEGORIES.find(x => x.id === el.getAttribute("data-edit-category"));
      state.modal = { type: "category", data: c }; render();
    };
  });
  root.querySelectorAll("[data-del-category]").forEach(el => {
    el.onclick = () => { state.modal = { type: "confirm-del-category", id: el.getAttribute("data-del-category") }; render(); };
  });
  root.querySelectorAll("[data-save-category]").forEach(el => {
    el.onclick = () => {
      const nameInput = document.querySelector("[data-category-name]");
      const name = (nameInput?.value || "").trim().toUpperCase();
      if (!name) return;
      const id = el.getAttribute("data-save-category");
      if (id) {
        const c = CATEGORIES.find(x => x.id === id);
        if (c) c.name = name;
        toast("Category updated");
      } else {
        CATEGORIES.push({ id: "c" + (CATEGORIES.length + 1), name, products: 0, active: true, created: "15 Sep 2026" });
        toast("Category added");
      }
      state.modal = null; render();
    };
  });
  root.querySelectorAll("[data-confirm-del-category]").forEach(el => {
    el.onclick = () => {
      const id = el.getAttribute("data-confirm-del-category");
      const i = CATEGORIES.findIndex(c => c.id === id);
      if (i > -1) CATEGORIES.splice(i, 1);
      state.modal = null; toast("Category deleted");
    };
  });

  // Stock adjust
  root.querySelectorAll("[data-adjust-stock]").forEach(el => {
    el.onclick = () => { state.modal = { type: "stock-adjust", id: el.getAttribute("data-adjust-stock") }; render(); };
  });
  root.querySelectorAll("[data-apply-stock]").forEach(el => {
    el.onclick = () => {
      const id = el.getAttribute("data-apply-stock");
      const inp = document.querySelector("[data-stock-amt]");
      const amt = parseInt(inp?.value || "0") || 0;
      const p = PRODUCTS.find(x => x.id === id);
      if (p) {
        p.stock = Math.max(0, p.stock + amt);
        p.status = computeStatus(p.stock);
      }
      state.modal = null; toast("Stock updated");
    };
  });

  // Order status
  root.querySelectorAll("[data-status-modal]").forEach(el => {
    el.onclick = () => { state.modal = { type: "order-status", id: el.getAttribute("data-status-modal") }; render(); };
  });
  root.querySelectorAll("[data-apply-order-status]").forEach(el => {
    el.onclick = () => {
      const id = el.getAttribute("data-apply-order-status");
      const sel = document.querySelector("[data-order-status]");
      const o = ORDERS.find(x => x.id === id);
      if (o && sel) { o.status = sel.value; o.paymentStatus = sel.value === "CANCELLED" ? "REFUNDED" : "PAID"; }
      state.modal = null; toast("Order status updated");
    };
  });

  // Product form
  root.querySelectorAll("[data-product-form]").forEach(form => {
    form.onsubmit = (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const data = {
        name: fd.get("name") || "", sku: fd.get("sku") || "", cat: fd.get("cat") || "",
        price: Number(fd.get("price") || 0), discount: Number(fd.get("discount") || 0),
        stock: Number(fd.get("stock") || 0), description: fd.get("description") || "",
        brand: fd.get("brand") || "SYAZZ", collection: fd.get("collection") || "",
        size: fd.get("size") || "", color: fd.get("color") || "", status: fd.get("status") || "ACTIVE",
      };
      if (!data.name || !data.price) { toast("Please fill in required fields"); return; }
      const editId = form.getAttribute("data-product-form");
      if (editId && editId !== "new") {
        const p = PRODUCTS.find(x => x.id === editId);
        if (p) Object.assign(p, data, { status: computeStatus(data.stock) });
        toast("Product updated successfully");
      } else {
        const id = "P" + (2000 + PRODUCTS.length);
        PRODUCTS.unshift({ id, status: computeStatus(data.stock), sold: 0, ...data });
        toast("Product saved successfully");
      }
      window.location.hash = "#/products";
    };
  });

  // Coupons
  root.querySelectorAll("[data-new-coupon]").forEach(el => {
    el.onclick = () => { state.modal = { type: "coupon" }; render(); };
  });
  root.querySelectorAll("[data-toggle-coupon]").forEach(el => {
    el.onclick = () => {
      const code = el.getAttribute("data-toggle-coupon");
      const c = COUPONS.find(x => x.code === code);
      if (c) c.status = c.status === "ACTIVE" ? "EXPIRED" : "ACTIVE";
      toast("Coupon updated");
    };
  });
  root.querySelectorAll("[data-del-coupon]").forEach(el => {
    el.onclick = () => { state.modal = { type: "confirm-del-coupon", code: el.getAttribute("data-del-coupon") }; render(); };
  });
  root.querySelectorAll("[data-confirm-del-coupon]").forEach(el => {
    el.onclick = () => {
      const code = el.getAttribute("data-confirm-del-coupon");
      COUPONS = COUPONS.filter(c => c.code !== code);
      state.modal = null; toast("Coupon deleted");
    };
  });
  root.querySelectorAll("[data-save-coupon]").forEach(el => {
    el.onclick = () => {
      const get = k => document.querySelector(`[data-coupon="${k}"]`)?.value || "";
      const code = get("code").toUpperCase();
      if (!code) { toast("Coupon code required"); return; }
      COUPONS.unshift({
        code, type: get("type"), amount: Number(get("amount") || 0),
        min: Number(get("min") || 0), max: Number(get("max") || 0),
        start: get("start") || "-", end: get("end") || "-",
        used: 0, limit: Number(get("limit") || 0), status: "ACTIVE"
      });
      state.modal = null; toast("Coupon created");
    };
  });

  // Banners
  root.querySelectorAll("[data-new-banner]").forEach(el => {
    el.onclick = () => { state.modal = { type: "banner" }; render(); };
  });
  root.querySelectorAll("[data-del-banner]").forEach(el => {
    el.onclick = () => { state.modal = { type: "confirm-del-banner", id: el.getAttribute("data-del-banner") }; render(); };
  });
  root.querySelectorAll("[data-confirm-del-banner]").forEach(el => {
    el.onclick = () => {
      const id = el.getAttribute("data-confirm-del-banner");
      BANNERS = BANNERS.filter(b => b.id !== id);
      state.modal = null; toast("Banner deleted");
    };
  });
  root.querySelectorAll("[data-save-banner]").forEach(el => {
    el.onclick = () => {
      const get = k => document.querySelector(`[data-banner="${k}"]`)?.value || "";
      const title = get("title");
      if (!title) { toast("Banner title required"); return; }
      BANNERS.unshift({ id: "B" + (BANNERS.length + 1), title, campaign: get("campaign"), start: get("start") || "-", end: get("end") || "-", status: "SCHEDULED", accent: "LIFESTYLE" });
      state.modal = null; toast("Banner added");
    };
  });

  // Settings save
  root.querySelectorAll("[data-save-settings]").forEach(el => {
    el.onclick = () => toast("Settings saved");
  });

  // Modal close
  root.querySelectorAll("[data-close-modal]").forEach(el => {
    el.onclick = () => { state.modal = null; render(); };
  });
}

/* =========================================================
   BOOT
   ========================================================= */
window.addEventListener("hashchange", () => {
  state.hash = window.location.hash || "#/";
  state.page = 1;
  state.filters = {};
  state.notifOpen = false;
  state.profileOpen = false;
  state.modal = null;
  window.scrollTo(0, 0);
  render();
});

render();
