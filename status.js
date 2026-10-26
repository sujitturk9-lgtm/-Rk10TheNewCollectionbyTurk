// สถานะบ้านแต่ละหลัง: แก้ไฟล์นี้ไฟล์เดียว ทุกหน้าอัปเดตตาม
// s: 'free' = ว่างพร้อมขาย (เขียว) · 'hold' = ติดจอง (เหลือง) · 'sold' = ขายออก (แดง)
var RK10_UPDATED = '27 ต.ค. 2569';
var RK10_DONE = { first: '2–3 หลังแรก เสร็จประมาณ ปลาย ธ.ค. 2569 (2 เดือน)', all: 'ครบทั้ง 7 หลัง เสร็จประมาณ ปลาย ก.พ. 2570 (4 เดือน)' };
var RK10_UNITS = [
  { n: 1, no: '160/32', s: 'free' },
  { n: 2, no: '160/33', s: 'free' },
  { n: 3, no: '160/34', s: 'free' },
  { n: 4, no: '160/35', s: 'free' },
  { n: 5, no: '160/36', s: 'free' },
  { n: 6, no: '160/37', s: 'free' },
  { n: 7, no: '160/38', s: 'free' }
];
(function () {
  var C = { free: ['#1f9d55', 'ว่าง พร้อมขาย', 'ว่าง'], hold: ['#e0a800', 'ติดจอง', 'ติดจอง'], sold: ['#d93025', 'ขายออก', 'ขายแล้ว'] };
  var css = '.us-wrap{display:grid;gap:10px}.us-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px}' +
    '@media(max-width:560px){.us-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}' +
    '.us-u{border:1px solid var(--line);border-radius:10px;padding:8px 4px 6px;text-align:center;background:var(--panel);font-size:13px;line-height:1.3}' +
    '.us-u svg{display:block;margin:0 auto 4px;width:44px;height:40px}.us-u b{display:block;font-size:14px}.us-u small{display:block;font-weight:600}' +
    '.us-leg{display:flex;flex-wrap:wrap;gap:12px;font-size:14px}.us-leg i{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:5px;vertical-align:-1px}' +
    '.us-done{font-size:14px;color:var(--muted);margin:0}.us-done b{color:var(--ink)}';
  function house(c) {
    return '<svg viewBox="0 0 44 40" aria-hidden="true"><path d="M4 20 22 5l18 15" fill="none" stroke="' + c + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="9" y="18" width="26" height="19" rx="2" fill="' + c + '"/><rect x="18" y="25" width="8" height="12" fill="#fff" opacity=".85"/></svg>';
  }
  function render() {
    var el = document.getElementById('unitStatus'); if (!el) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var free = RK10_UNITS.filter(function (u) { return u.s === 'free'; }).length;
    var h = '<div class="us-wrap"><div class="us-leg">' +
      ['free', 'hold', 'sold'].map(function (k) { return '<span><i style="background:' + C[k][0] + '"></i>' + C[k][1] + '</span>'; }).join('') +
      '</div><div class="us-grid">' + RK10_UNITS.map(function (u) {
        var c = C[u.s] || C.free;
        return '<div class="us-u">' + house(c[0]) + '<b>หลัง ' + u.n + '</b>' + u.no + '<small style="color:' + c[0] + '">' + c[2] + '</small></div>';
      }).join('') + '</div>' +
      '<p class="us-done">ว่าง <b>' + free + '</b> จาก 7 หลัง · อัปเดต ' + RK10_UPDATED + '</p>' +
      '<p class="us-done">🏗️ กำหนดเสร็จ<br>• <b>' + RK10_DONE.first + '</b><br>• <b>' + RK10_DONE.all + '</b></p></div>';
    el.innerHTML = h;
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render); else render();
})();
