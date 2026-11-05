
/* ===================== DATA ===================== */
const TODAY=new Date('2026-11-05T10:00:00');
const POS={CS:'Chăm sóc khách hàng',TS:'Telesales',SB:'Sales B2C',HC:'Hành chính – nhân sự'};
const AREAS=['TP. HCM','Hà Nội','Bình Dương','Đà Nẵng','Đồng Nai'];
let S, seq;
function seed(){
  seq={id:100,order:1040,pay:2040,com:5000,log:1};
  const cfg={price:100000,minCV:5,src:3,scr:2,ref:5,updatedBy:'Admin vận hành',at:'2026-10-01'};
  const accounts=[
    {id:'kh1',role:'kh',name:'Công ty TNHH Bán lẻ An Phát',contact:'Nguyễn Thị Hạnh',email:'tuyendung@anphat.vn',phone:'0901 223 344',status:'Hoạt động',refBy:'bd1',created:'2026-09-02'},
    {id:'kh2',role:'kh',name:'Công ty CP Dịch vụ Sao Việt',contact:'Trần Văn Lộc',email:'hr@saoviet.vn',phone:'0912 556 778',status:'Hoạt động',refBy:null,created:'2026-09-15'},
    {id:'kh3',role:'kh',name:'Công ty TNHH Viễn thông Minh Phú',contact:'Lý Thu Trang',email:'nhansu@minhphu.vn',phone:'0938 112 009',status:'Hoạt động',refBy:'bd1',created:'2026-10-20'},
    {id:'hr1',role:'hr',name:'Trần Minh Thư',email:'thu.tm@company.vn',status:'Hoạt động',created:'2026-08-01'},
    {id:'hr2',role:'hr',name:'Lê Quốc Bảo',email:'bao.lq@company.vn',status:'Hoạt động',mustChange:true,created:'2026-11-01'},
    {id:'ctv1',role:'ctv',name:'Phạm Ngọc Hân',email:'han.pn@gmail.com',status:'Hoạt động',created:'2026-08-20'},
    {id:'ctv2',role:'ctv',name:'Võ Thanh Tùng',email:'tung.vt@gmail.com',status:'Chờ duyệt',created:'2026-11-03'},
    {id:'bd1',role:'ngt',name:'Đỗ Hoài Nam',email:'nam.dh@company.vn',status:'Hoạt động',kind:'BD nội bộ',refCode:'NAM24',created:'2026-08-05'},
    {id:'ngt2',role:'ngt',name:'Huỳnh Gia Khánh',email:'khanh.hg@partner.vn',status:'Chờ duyệt',kind:'Đối tác',created:'2026-11-04'},
    {id:'ad1',role:'admin',name:'Admin vận hành',email:'admin@company.vn',status:'Hoạt động',created:'2026-08-01'}
  ];
  const raw=[
    ['CS','Nguyễn Thị Mai',2000,'Nữ','TP. HCM',2,10,'Đại học','Giao tiếp tốt, xử lý khiếu nại','Bán lẻ','hr1','hr1',true],
    ['CS','Lê Hoàng Phúc',1998,'Nam','TP. HCM',4,12,'Cao đẳng','Kinh nghiệm tổng đài 1900, tiếng Anh giao tiếp','Viễn thông','ctv1','hr1',true],
    ['CS','Trần Bảo Ngọc',2001,'Nữ','Bình Dương',1,8,'Đại học','Kiên nhẫn, dùng thành thạo CRM','Thương mại điện tử','hr1','hr1',true],
    ['TS','Phạm Văn Khoa',1997,'Nam','TP. HCM',3,11,'Đại học','Chốt đơn tốt, quen KPI cuộc gọi','Bảo hiểm','hr2','hr1',true],
    ['TS','Đặng Thu Hà',1999,'Nữ','Hà Nội',2,9,'Cao đẳng','Giọng nói rõ, chịu áp lực tốt','Tài chính tiêu dùng','ctv1','hr1',true],
    ['TS','Bùi Minh Tâm',2002,'Nam','Đồng Nai',1,8,'Trung cấp','Nhiệt tình, học nhanh','Giáo dục','hr1','hr1',true],
    ['SB','Vũ Ngọc Anh',1996,'Nữ','TP. HCM',5,15,'Đại học','Từng đạt top doanh số khu vực','Bất động sản','hr1','hr1',true],
    ['SB','Hồ Đức Thịnh',1995,'Nam','Đà Nẵng',6,16,'Đại học','Quản lý nhóm 5 người','Ô tô','ctv1','hr1',true],
    ['SB','Ngô Thanh Trúc',2000,'Nữ','TP. HCM',2,10,'Cao đẳng','Tư vấn trực tiếp tại cửa hàng','Mỹ phẩm','hr2','hr1',false],
    ['HC','Lâm Gia Huy',1999,'Nam','TP. HCM',3,11,'Đại học','Thành thạo Excel, BHXH','Sản xuất','hr1','hr1',true],
    ['CS','Mai Phương Thảo',2003,'Nữ','TP. HCM',0,7,'Cao đẳng','Thực tập CSKH 6 tháng','Bán lẻ','ctv1',null,false,'Chờ sàng lọc'],
    ['TS','Châu Quốc Việt',1998,'Nam','Hà Nội',2,9,'Đại học','Telesales gói học tiếng Anh','Giáo dục','hr2',null,false,'Chờ sàng lọc'],
    ['SB','Trịnh Hữu Lợi',1994,'Nam','TP. HCM',1,20,'Trung cấp','','Bán lẻ','ctv1','hr1',false,'Không đạt'],
    ['HC','Đinh Khánh Linh',2000,'Nữ','Bình Dương',2,9,'Đại học','Chấm công, tuyển dụng đầu vào','Sản xuất','hr2','hr1',true],
    ['CS','Tạ Minh Châu',1999,'Nữ','Hà Nội',3,11,'Đại học','Chăm sóc khách hàng VIP, tiếng Anh tốt','Ngân hàng','hr1','hr1',true],
    ['CS','Quách Văn Đạt',2000,'Nam','Đà Nẵng',2,9,'Cao đẳng','Hỗ trợ khách hàng qua chat và email','Du lịch','ctv1','hr1',true],
    ['TS','Lưu Thị Kim',1998,'Nữ','TP. HCM',4,12,'Đại học','Telesales tài chính, đạt KPI 6 tháng liên tục','Tài chính tiêu dùng','ctv1','hr1',true],
    ['TS','Kiều Anh Tuấn',2001,'Nam','Bình Dương',1,8,'Cao đẳng','Giọng nói truyền cảm, nhanh nhẹn','Bất động sản','hr1','hr1',true],
    ['SB','Dương Hải Yến',1997,'Nữ','Hà Nội',4,14,'Đại học','Bán hàng B2C ngành điện máy','Điện máy','hr2','hr1',true],
    ['SB','Phùng Quang Huy',1996,'Nam','TP. HCM',5,15,'Đại học','Mở mới khách hàng, chăm sóc đại lý','Thực phẩm','ctv1','hr1',true],
    ['HC','Tôn Nữ Thanh Vy',2001,'Nữ','TP. HCM',1,8,'Đại học','Hồ sơ nhân sự, hợp đồng lao động','Logistics','hr1','hr1',true],
    ['HC','La Văn Phát',1995,'Nam','Đồng Nai',5,13,'Đại học','Quản lý hành chính văn phòng 50 nhân sự','Sản xuất','hr2','hr1',true]
  ];
  const counters={};
  const cvs=raw.map((r,i)=>{
    const [pos,name,by,g,area,exp,sal,edu,str,ind,src,scr,otw,status]=r;
    counters[pos]=(counters[pos]||0)+1;
    const code=pos+'-'+String(counters[pos]).padStart(3,'0');
    const phone='09'+String(10000000+((i*7919)%89999999)).slice(0,8).replace(/(\d{2})(\d{3})(\d{3})/,'$1 $2 $3');
    return {id:'cv'+(i+1),code,pos,name,birth:by,gender:g,area,exp,salary:sal,edu,strengths:str,industry:ind,
      phone,email:name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d').split(' ').slice(-2).join('.')+'@gmail.com',
      workStatus:i%3?'Đang đi làm':'Đang tìm việc',onboard:['01/12/2026','15/11/2026','Ngay'][i%3],
      source:src,screener:scr,status:status||'Đạt',otw,note:status==='Không đạt'?'Mức lương mong muốn cao hơn mặt bằng vị trí, thiếu kinh nghiệm phù hợp.':'',
      token:'u'+(73120+i*17),consent:true,created:'2026-'+(i<6?'09':'10')+'-'+String(5+i).padStart(2,'0'),otwBy:otw?'Ứng viên':null,otwAt:otw?'2026-10-12':null};
  });
  S={cfg,cfgLog:[{at:'2026-10-01',by:'Admin vận hành',text:'Giá 100.000 đ/CV · tối thiểu 5 CV · Source 3% · Screener 2% · Referral 5%'}],
     accounts,cvs,orders:[],payments:[],handovers:[],commissions:[],notis:[],attrLog:[],
     role:'guest',me:null,cart:[],route:'',uvToken:null,
     ui:{q:'',pos:'',area:'',exp:'',sal:'',tab:'pending',regType:'kh',regRef:'',comFilter:'all',login:null}};
  // seed historical paid orders (sample)
  const mk=(cust,codes,date,fail)=>{const o=createOrder(cust,codes.map(c=>S.cvs.find(v=>v.code===c).id),date);
    if(fail){payFail(o,date)}else payOk(o,date,true);return o};
  mk('kh1',['CS-001','CS-002','TS-001','TS-002','SB-001'],'2026-09-10');
  mk('kh2',['CS-001','CS-003','TS-003','SB-002','HC-001'],'2026-10-08');
  mk('kh1',['SB-002','HC-001','CS-003','TS-003','SB-003'],'2026-10-22');
  mk('kh3',['CS-002','TS-001','TS-002','SB-001','HC-002'],'2026-11-02');
  createOrder('kh3',['CS-001','CS-003','TS-003','SB-002','HC-001'].map(c=>S.cvs.find(v=>v.code===c).id),'2026-11-04');
  S.notis=S.notis.slice(-12);
}
/* ===================== DOMAIN ===================== */
const acc=id=>S.accounts.find(a=>a.id===id);
const cvById=id=>S.cvs.find(c=>c.id===id);
const fmt=n=>Math.round(n).toLocaleString('vi-VN')+' đ';
const dshow=d=>{if(!d)return'';const [y,m,dd]=d.slice(0,10).split('-');return `${dd}/${m}/${y}`};
const nowISO=()=>{const d=new Date();return d.toISOString().slice(0,10)};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const available=c=>c.status==='Đạt'&&c.otw;
const owned=(custId)=>new Set(S.handovers.filter(h=>h.customer===custId).map(h=>h.cv));
function notify(to,channel,text,date){S.notis.unshift({id:seq.log++,to,channel,text,at:date||nowISO()});}
function createOrder(cust,cvIds,date){
  const o={id:'DH'+(seq.order++),customer:cust,items:cvIds.map(id=>({cv:id,price:S.cfg.price})),total:cvIds.length*S.cfg.price,status:'Chờ thanh toán',created:date||nowISO()};
  S.orders.unshift(o);return o;
}
function payOk(o,date,silent){
  const d=date||nowISO();
  const p={id:'TT'+(seq.pay++),order:o.id,gw:'GW'+Math.floor(100000+Math.random()*899999),amount:o.total,status:'Thành công',at:d};
  S.payments.unshift(p); o.status='Đã thanh toán'; o.paidAt=d;
  const cust=acc(o.customer); const steps=[];
  steps.push(`Ghi nhận thanh toán ${p.id}, doanh thu ${fmt(o.total)}`);
  o.items.forEach(it=>{
    const c=cvById(it.cv);
    S.handovers.unshift({id:'BG'+(seq.com++),order:o.id,cv:c.id,customer:o.customer,at:d,channel:'Zalo OA / Email',notify:'Đã gửi'});
    [['Source',c.source,S.cfg.src],['Screener',c.screener,S.cfg.scr]].forEach(([role,who,rate])=>{
      if(who) S.commissions.unshift({id:'HH'+(seq.com++),order:o.id,cv:c.id,account:who,role,rate,amount:it.price*rate/100,at:d});
    });
    notify(c.name,'Zalo OA / Email',`Hồ sơ ${c.code} đã được bàn giao cho ${cust.name} lúc ${dshow(d)}.`,d);
  });
  steps.push(`Mở khóa ${o.items.length} CV cho khách hàng, ghi lịch sử bàn giao`);
  steps.push(`Tạo ${o.items.length*2} khoản commission Source và Screener`);
  const firstPaid=S.orders.filter(x=>x.customer===o.customer&&x.status==='Đã thanh toán').length===1;
  if(cust.refBy&&firstPaid){
    S.commissions.unshift({id:'HH'+(seq.com++),order:o.id,cv:null,account:cust.refBy,role:'Referral',rate:S.cfg.ref,amount:o.total*S.cfg.ref/100,at:d});
    steps.push(`Tạo hoa hồng Referral cho ${acc(cust.refBy).name} (đơn đầu tiên của khách hàng)`);
  } else if(cust.refBy){ steps.push('Không tạo hoa hồng Referral: khách hàng đã có đơn thanh toán trước đó'); }
  steps.push(`Gửi thông báo bàn giao cho ${o.items.length} ứng viên qua Zalo OA / Email`);
  notify(cust.name,'Email',`Đơn ${o.id} thanh toán thành công, ${o.items.length} CV đã được mở khóa.`,d);
  return steps;
}
function payFail(o,date){S.payments.unshift({id:'TT'+(seq.pay++),order:o.id,gw:'GW'+Math.floor(100000+Math.random()*899999),amount:o.total,status:'Thất bại',at:date||nowISO()});}

/* ===================== NAV ===================== */
const NAV={
  guest:[['dang-nhap','Đăng nhập','UC02'],['dang-ky','Đăng ký tài khoản','UC01']],
  kh:[['kh-tim-kiem','Tìm kiếm CV','UC07'],['kh-gio','Đơn đang chọn','UC08'],['kh-don-hang','Đơn hàng & thanh toán','UC10'],['kh-cv','CV đã sở hữu','UC09']],
  hr:[['hr-tao-cv','Tạo CV','UC04'],['hr-sang-loc','Sàng lọc CV','UC05'],['hr-cv','CV của tôi','UC06'],['hr-commission','Commission của tôi','UC11']],
  ctv:[['ctv-nop-cv','Nộp CV','UC04'],['ctv-cv','CV đã nộp',''],['ctv-commission','Commission của tôi','UC11']],
  ngt:[['ngt-link','Link & khách hàng','UC12'],['ngt-commission','Commission của tôi','UC11']],
  admin:[['ad-tai-khoan','Quản lý tài khoản','UC03'],['ad-cau-hinh','Cấu hình giá & commission','UC13'],['ad-dieu-chinh','Điều chỉnh Source/Screener','UC14'],['ad-bao-cao','Báo cáo','UC15'],['ad-cv','Tất cả CV',''],['ad-thong-bao','Nhật ký thông báo','']],
  uv:[['uv-link','Trang link cá nhân','UC06']]
};
const ROLE_NAME={guest:'Khách truy cập',kh:'Khách hàng',hr:'HR',ctv:'CTV',ngt:'Người giới thiệu',admin:'Admin',uv:'Ứng viên'};
const DEFAULT_ACC={kh:'kh2',hr:'hr1',ctv:'ctv1',ngt:'bd1',admin:'ad1'};
const PORTAL=window.PORTAL||'user';
const DATA_KEY='cvm_data_v1', SES_KEY='cvm_session_'+PORTAL;
const PORTAL_ROLES={user:['kh','hr','ctv','ngt'],admin:['admin'],uv:[]};
if(PORTAL==='admin')NAV.guest=NAV.guest.slice(0,1);
function store(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(_){}}
function load(k){try{return JSON.parse(localStorage.getItem(k)||'null')}catch(_){return null}}
function sesSave(){try{sessionStorage.setItem(SES_KEY,JSON.stringify({role:S.role,me:S.me,cart:S.cart}))}catch(_){}}
function sesLoad(){try{return JSON.parse(sessionStorage.getItem(SES_KEY)||'null')}catch(_){return null}}
const DATA_FIELDS=['cfg','cfgLog','accounts','cvs','orders','payments','handovers','commissions','notis','attrLog'];
function save(){const d={seq};DATA_FIELDS.forEach(k=>d[k]=S[k]);store(DATA_KEY,d);sesSave();}
function restore(){const d=load(DATA_KEY);if(!d)return false;seed();seq=d.seq;DATA_FIELDS.forEach(k=>S[k]=d[k]);return true}
window.addEventListener('storage',e=>{if(e.key===DATA_KEY&&e.newValue){const keep={role:S.role,me:S.me,cart:S.cart,ui:S.ui,uvToken:S.uvToken};restore();Object.assign(S,keep);render()}});
function setRole(role,accId){
  S.role=role; S.me=accId||null; S.cart=[];
  go(NAV[role][0][0]);
}
function go(r){ if(location.hash!=='#'+r){location.hash=r}else render(); }
window.addEventListener('hashchange',()=>render());
function toast(msg,err){const t=document.createElement('div');t.className='toast'+(err?' err':'');t.textContent=msg;const box=document.getElementById('toasts');box.appendChild(t);while(box.children.length>3)box.firstChild.remove();setTimeout(()=>t.remove(),3800);}
function closeOverlay(){document.getElementById('overlay').innerHTML=''}
function drawer(html){document.getElementById('overlay').innerHTML=`<div class="scrim" data-act="close-scrim"><div class="drawer" role="dialog" aria-modal="true">${html}</div></div>`;}

/* ===================== RENDER ===================== */
function render(){
  let r=location.hash.slice(1)||NAV[S.role][0][0]; if(!VIEWS[r]||!(NAV[S.role].some(i=>i[0]===r)||(r==='kh-thanh-toan'&&S.role==='kh')))r=NAV[S.role][0][0]; S.route=r;
  if(S.role==='uv'&&!S.uvToken) S.uvToken=S.cvs.find(c=>c.status==='Đạt'&&!c.otw)?.token;
  renderSide(); const m=document.getElementById('main');
  const V=VIEWS[r]||VIEWS[NAV[S.role][0][0]];
  m.innerHTML=V(); window.scrollTo(0,0); save();
}
function renderSide(){
  const me=acc(S.me); const items=NAV[S.role];
  const cartN=S.cart.length;
  document.getElementById('side').innerHTML=`
    <div class="brand" style="flex-direction:column;align-items:flex-start;gap:6px"><img src="assets/logo.png" alt="Light Human"><div class="brand-sub">CV Marketplace</div></div>
    <div class="who"><div class="role">${ROLE_NAME[S.role]}</div>
      <div style="font-weight:600">${S.role==='uv'?esc(S.cvs.find(c=>c.token===S.uvToken)?.name||'Ứng viên'):esc(me?.name||'Chưa đăng nhập')}</div>
      ${me?`<div class="small muted">${esc(me.email)}</div><button class="link small" data-act="logout">Đăng xuất</button>`:''}
    </div>
    <nav class="menu" aria-label="Chức năng">${items.map(([id,l,uc])=>`<a href="#${id}" class="${S.route===id||(id==='kh-don-hang'&&S.route==='kh-thanh-toan')?'on':''}"><span>${l}</span>${id==='kh-gio'&&cartN?`<span class="cartcount">${cartN}</span>`:`<span class="uc">${uc}</span>`}</a>`).join('')}</nav>
    <div class="side-foot small">${PORTAL==='admin'?'<a href="index.html" target="_blank" rel="noopener">Mở trang sử dụng ↗</a>':PORTAL==='user'?'<a href="admin.html" target="_blank" rel="noopener">Mở trang quản trị ↗</a>':'<a href="index.html" target="_blank" rel="noopener">Trang sử dụng ↗</a>'}
    <button class="link" data-act="reset">Khôi phục dữ liệu mẫu</button></div>`;
}
const head=(uc,title,desc,right='')=>`<div class="pagehead"><div><div class="crumb">${uc?`<span class="ucchip">${uc}</span>`:''}<span class="small muted">${ROLE_NAME[S.role]}</span></div><h1>${title}</h1>${desc?`<p>${desc}</p>`:''}</div>${right}</div>`;
const pill=(s)=>{const m={'Đạt':'p-ok','Hoạt động':'p-ok','Đã thanh toán':'p-ok','Thành công':'p-ok','Đã gửi':'p-ok','Chờ sàng lọc':'p-warn','Chờ duyệt':'p-warn','Chờ thanh toán':'p-warn','Không đạt':'p-bad','Bị khóa':'p-bad','Từ chối':'p-bad','Thất bại':'p-bad'};return `<span class="pill ${m[s]||'p-neutral'}">${esc(s)}</span>`};
const otwPill=c=>c.status!=='Đạt'?'<span class="muted small">—</span>':c.otw?'<span class="pill p-acc">Open to Work</span>':'<span class="pill p-neutral">Đã tắt / chờ bật</span>';
const posOpts=(v,all='Tất cả vị trí')=>`<option value="">${all}</option>`+Object.entries(POS).map(([k,n])=>`<option value="${k}" ${v===k?'selected':''}>${n}</option>`).join('');
const areaOpts=(v,all='Tất cả khu vực')=>`<option value="">${all}</option>`+AREAS.map(a=>`<option ${v===a?'selected':''}>${a}</option>`).join('');

const VIEWS={};
/* ---------- AUTH ---------- */
VIEWS['dang-nhap']=()=>{
  const L=S.ui.login;
  if(L&&L.step==='change') return `<div class="auth">${head('UC02','Đổi mật khẩu lần đầu','Tài khoản được Admin cấp phải đổi mật khẩu trước khi sử dụng.')}
   <form class="panel stack" data-form="change-pw"><div class="field"><label for="np1">Mật khẩu mới</label><input id="np1" type="password" required minlength="8" placeholder="Tối thiểu 8 ký tự"></div>
   <div class="field"><label for="np2">Nhập lại mật khẩu mới</label><input id="np2" type="password" required></div>
   <div id="cpErr"></div><button class="btn pri">Lưu mật khẩu và vào hệ thống</button></form></div>`;
  return `<div class="auth">${head('UC02',PORTAL==='admin'?'Đăng nhập quản trị':'Đăng nhập',PORTAL==='admin'?'Dành cho Admin vận hành hệ thống.':'Dùng email và mật khẩu đã đăng ký hoặc được cấp.')}
  <form class="panel stack" data-form="login">
    <div class="field"><label for="lgEmail">Email</label><input id="lgEmail" type="email" required placeholder="ten@congty.vn" value="${esc(L?.email||'')}"></div>
    <div class="field"><label for="lgPw">Mật khẩu</label><input id="lgPw" type="password" required placeholder="Mật khẩu demo: bất kỳ" value="${L?.email?'demo1234':''}"></div>
    <div id="lgErr">${L?.err?`<div class="note err">${L.err}</div>`:''}</div>
    <button class="btn pri">Đăng nhập</button>
    ${PORTAL==='user'?`<p class="small muted">Chưa có tài khoản? <button type="button" class="link" data-go="dang-ky">Đăng ký</button></p>`:''}
  </form>
  <div class="panel"><h3 style="margin-bottom:8px">Tài khoản mẫu</h3><p class="small muted" style="margin-bottom:10px">Chọn để điền sẵn email. Có cả tài khoản chờ duyệt và tài khoản phải đổi mật khẩu để thử các luồng ngoại lệ.</p>
  <div class="acclist">${S.accounts.filter(a=>PORTAL_ROLES[PORTAL].includes(a.role)).map(a=>`<button type="button" data-act="fill-login" data-id="${a.id}"><span>${esc(a.name)} <span class="small muted">· ${ROLE_NAME[a.role]}</span></span>${pill(a.status)}</button>`).join('')}</div></div></div>`;
};
VIEWS['dang-ky']=()=>{
  const t=S.ui.regType; const ref=S.ui.regRef;
  const refAcc=ref?S.accounts.find(a=>a.refCode===ref&&a.status==='Hoạt động'):null;
  return `<div class="auth">${head('UC01','Đăng ký tài khoản','Tài khoản Khách hàng dùng được ngay. Tài khoản CTV và Người giới thiệu (đối tác) chờ Admin duyệt.')}
  ${ref?`<div class="note ${refAcc?'info':'warn'}">${refAcc?`Bạn đang đăng ký qua link giới thiệu của <b>${esc(refAcc.name)}</b> (mã <span class="mono">${esc(ref)}</span>).`:`Mã giới thiệu <span class="mono">${esc(ref)}</span> không hợp lệ hoặc đã bị vô hiệu. Bạn vẫn đăng ký được nhưng không được gắn Người giới thiệu.`}</div>`:''}
  <form class="panel stack" data-form="register">
    <div class="field"><label>Loại tài khoản</label><div class="seg" role="radiogroup">
      ${[['kh','Khách hàng'],['ctv','CTV'],['ngt','Người giới thiệu']].map(([k,l])=>`<button type="button" role="radio" aria-checked="${t===k}" class="${t===k?'on':''}" data-act="reg-type" data-v="${k}">${l}</button>`).join('')}</div></div>
    ${t==='kh'?`<div class="field"><label for="rgCompany">Tên doanh nghiệp</label><input id="rgCompany" required placeholder="Công ty TNHH ..."></div>
    <div class="field"><label for="rgContact">Người liên hệ</label><input id="rgContact" required></div>`:`<div class="field"><label for="rgName">Họ tên</label><input id="rgName" required></div>`}
    <div class="field"><label for="rgEmail">Email</label><input id="rgEmail" type="email" required></div>
    <div class="field"><label for="rgPhone">Số điện thoại</label><input id="rgPhone" required></div>
    <div class="field"><label for="rgPw">Mật khẩu</label><input id="rgPw" type="password" required minlength="8" placeholder="Tối thiểu 8 ký tự"></div>
    <div id="rgErr"></div>
    <button class="btn pri">Đăng ký</button>
    <p class="small muted">Thử email đã tồn tại (ví dụ <span class="mono">hr@saoviet.vn</span>) để xem luồng báo lỗi.</p>
  </form>
  <div class="panel small"><b>Thử link giới thiệu:</b> <button type="button" class="link" data-act="ref-try" data-v="NAM24">mở link có mã NAM24</button> · <button type="button" class="link" data-act="ref-try" data-v="XYZ00">mã không hợp lệ</button>${ref?` · <button type="button" class="link" data-act="ref-try" data-v="">bỏ mã</button>`:''}</div></div>`;
};
/* ---------- CUSTOMER ---------- */
function cvCard(c,mine){
  const sel=S.cart.includes(c.id);
  return `<article class="cv ${sel?'sel':''}"><div class="cv-top"><div><div class="code">${c.code}</div><h3>${POS[c.pos]}</h3></div>${mine?'<span class="pill p-ok">Đã sở hữu</span>':''}</div>
  <dl><dt>Kinh nghiệm</dt><dd class="num">${c.exp?c.exp+' năm':'Chưa có'} · ${esc(c.industry)}</dd><dt>Khu vực</dt><dd>${c.area}</dd><dt>Giới tính</dt><dd>${c.gender} · ${c.birth}</dd><dt>Trình độ</dt><dd>${c.edu}</dd><dt>Lương mong muốn</dt><dd class="num">${c.salary} triệu</dd></dl>
  <div class="cv-foot"><button class="link small" data-act="preview" data-id="${c.id}">Xem preview</button>
  ${mine?`<button class="btn sm" data-go="kh-cv">Mở CV</button>`:sel?`<button class="btn sm" data-act="cart-del" data-id="${c.id}">Bỏ chọn</button>`:`<button class="btn sm pri" data-act="cart-add" data-id="${c.id}">Chọn mua</button>`}</div></article>`;
}
VIEWS['kh-tim-kiem']=()=>{
  const u=S.ui; const mine=owned(S.me);
  let list=S.cvs.filter(available).filter(c=>(!u.pos||c.pos===u.pos)&&(!u.area||c.area===u.area)&&(!u.exp||c.exp>=+u.exp)&&(!u.sal||c.salary<=+u.sal)&&(!u.q||(c.code+' '+POS[c.pos]+' '+c.industry+' '+c.strengths).toLowerCase().includes(u.q.toLowerCase())));
  return head('UC07','Tìm kiếm <em>CV</em>','Chỉ hiển thị CV đã được HR sàng lọc đạt và ứng viên đang bật Open to Work. Thông tin liên hệ được mở sau khi thanh toán.',`<div class="row"><span class="small muted">Giá</span><span class="price">${fmt(S.cfg.price)}/CV</span><span class="small muted">· tối thiểu ${S.cfg.minCV} CV/đơn</span></div>`)+
  `<form class="panel filters" data-form="filter">
    <div class="field q"><label for="fq">Từ khóa</label><input id="fq" value="${esc(u.q)}" placeholder="Mã CV, ngành, kỹ năng…"></div>
    <div class="field"><label for="fpos">Vị trí</label><select id="fpos">${posOpts(u.pos)}</select></div>
    <div class="field"><label for="farea">Khu vực</label><select id="farea">${areaOpts(u.area)}</select></div>
    <div class="field"><label for="fexp">Kinh nghiệm tối thiểu</label><select id="fexp"><option value="">Bất kỳ</option>${[1,2,3,5].map(n=>`<option value="${n}" ${u.exp==n?'selected':''}>${n} năm</option>`).join('')}</select></div>
    <div class="field"><label for="fsal">Lương tối đa</label><select id="fsal"><option value="">Bất kỳ</option>${[8,10,12,15].map(n=>`<option value="${n}" ${u.sal==n?'selected':''}>${n} triệu</option>`).join('')}</select></div>
  </form>
  <div class="row" style="justify-content:space-between"><span class="small muted">${list.length} CV phù hợp</span>${S.cart.length?`<button class="btn pri sm" data-go="kh-gio">Xem đơn đang chọn (${S.cart.length})</button>`:''}</div>
  ${list.length?`<div class="cvgrid">${list.map(c=>cvCard(c,mine.has(c.id))).join('')}</div>`:`<div class="panel empty">Không có CV phù hợp với bộ lọc. Thử bỏ bớt điều kiện.</div>`}`;
};
function previewHTML(c){
  return `<div class="drawer-h"><div><div class="code">${c.code}</div><h2>${POS[c.pos]}</h2></div><button class="btn sm" data-act="close">Đóng</button></div>
  <span class="ucchip" style="align-self:flex-start">UC07 · Preview</span>
  <dl class="kv"><dt>Giới tính / năm sinh</dt><dd>${c.gender} · ${c.birth}</dd><dt>Khu vực</dt><dd>${c.area}</dd><dt>Trình độ</dt><dd>${c.edu}</dd><dt>Kinh nghiệm</dt><dd>${c.exp?c.exp+' năm':'Chưa có'} trong ngành ${esc(c.industry)}</dd><dt>Điểm mạnh</dt><dd>${esc(c.strengths)||'—'}</dd><dt>Trạng thái công tác</dt><dd>${c.workStatus}</dd><dt>Có thể nhận việc</dt><dd>${c.onboard}</dd><dt>Lương mong muốn</dt><dd>${c.salary} triệu</dd></dl>
  <div class="locked">Họ tên, số điện thoại, email và file CV đầy đủ được mở khóa sau khi đơn hàng thanh toán thành công.</div>`;
}
VIEWS['kh-gio']=()=>{
  const items=S.cart.map(cvById); const n=items.length; const ok=n>=S.cfg.minCV;
  return head('UC08','Đơn đang chọn',`Đơn hàng cần tối thiểu ${S.cfg.minCV} CV. CV đã sở hữu không thể mua lại.`)+
  (n?`<div class="tw"><table><thead><tr><th>Mã CV</th><th>Vị trí</th><th>Khu vực</th><th class="r">Đơn giá</th><th></th></tr></thead><tbody>
  ${items.map(c=>`<tr><td class="mono">${c.code}</td><td>${POS[c.pos]}</td><td>${c.area}</td><td class="r num">${fmt(S.cfg.price)}</td><td class="r"><button class="link small" data-act="cart-del" data-id="${c.id}">Bỏ</button></td></tr>`).join('')}
  </tbody></table></div>
  <div class="panel row" style="justify-content:space-between">
    <div><div class="small muted">${n} CV × ${fmt(S.cfg.price)}</div><div class="amount price">${fmt(n*S.cfg.price)}</div></div>
    <div class="stack" style="align-items:flex-end;gap:6px">${ok?'':`<div class="note warn">Cần chọn thêm ${S.cfg.minCV-n} CV để tạo đơn.</div>`}
    <div class="row"><button class="btn" data-go="kh-tim-kiem">Chọn thêm</button><button class="btn pri" data-act="create-order" ${ok?'':'disabled'}>Tạo đơn hàng</button></div></div></div>`
  :`<div class="panel empty">Chưa chọn CV nào. <button class="link" data-go="kh-tim-kiem">Tìm kiếm CV</button></div>`);
};
VIEWS['kh-don-hang']=()=>{
  const os=S.orders.filter(o=>o.customer===S.me);
  return head('UC10','Đơn hàng & thanh toán','Đơn ở trạng thái Chờ thanh toán được thanh toán trực tuyến qua cổng thanh toán.')+
  (os.length?`<div class="tw"><table><thead><tr><th>Mã đơn</th><th>Ngày tạo</th><th class="r">Số CV</th><th class="r">Tổng tiền</th><th>Trạng thái</th><th></th></tr></thead><tbody>
  ${os.map(o=>{const fails=S.payments.filter(p=>p.order===o.id&&p.status==='Thất bại').length;return `<tr><td class="mono">${o.id}</td><td class="num">${dshow(o.created)}</td><td class="r num">${o.items.length}</td><td class="r num">${fmt(o.total)}</td><td>${pill(o.status)}${fails?` <span class="small muted">${fails} lần thất bại</span>`:''}</td>
  <td class="r">${o.status==='Chờ thanh toán'?`<button class="btn pri sm" data-act="pay" data-id="${o.id}">${fails?'Thanh toán lại':'Thanh toán'}</button>`:`<button class="link small" data-go="kh-cv">Xem CV</button>`}</td></tr>`}).join('')}
  </tbody></table></div>`:`<div class="panel empty">Chưa có đơn hàng.</div>`);
};
VIEWS['kh-thanh-toan']=()=>{
  const o=S.orders.find(x=>x.id===S.ui.payOrder);
  if(S.ui.payResult){const r=S.ui.payResult;
    return head('UC10',r.ok?'Thanh toán thành công':'Thanh toán không thành công',r.ok?'Hệ thống đã xác thực kết quả từ cổng thanh toán và xử lý đơn hàng.':'Đơn hàng vẫn ở trạng thái Chờ thanh toán. Doanh thu không được ghi nhận, CV chưa được mở khóa.')+
    `<div class="panel stack">${r.ok?`<ul class="steps">${r.steps.map((s,i)=>`<li><span class="d">${i+1}</span><span>${esc(s)}</span></li>`).join('')}</ul>`:`<div class="note err">Cổng thanh toán trả về kết quả thất bại hoặc khách hàng hủy giao dịch.</div>`}
    <div class="row">${r.ok?`<button class="btn pri" data-go="kh-cv">Xem CV đã mua</button>`:`<button class="btn pri" data-act="pay" data-id="${r.order}">Thanh toán lại</button>`}<button class="btn" data-act="pay-done">Về danh sách đơn</button></div></div>`;}
  if(!o) return VIEWS['kh-don-hang']();
  const cells=[];let x=o.id.split('').reduce((a,c)=>a*31+c.charCodeAt(0),7);
  for(let i=0;i<441;i++){const r=Math.floor(i/21),c=i%21;const finder=(r<7&&c<7)||(r<7&&c>13)||(r>13&&c<7);
    let on; if(finder){const rr=r%14>6?r-14:r%14,cc=c>13?c-14:c;const R=r>13?r-14:r,C=c>13?c-14:c;on=(R===0||R===6||C===0||C===6||(R>1&&R<5&&C>1&&C<5));} else {x=(x*1103515245+12345)&0x7fffffff;on=(x>>16)&1;}
    cells.push(on?'<i></i>':'<b></b>');}
  return head('UC10','Cổng thanh toán','Màn hình mô phỏng cổng thanh toán bên ngoài. Bấm một trong hai nút để giả lập kết quả cổng trả về.')+
  `<div class="gw"><div class="gw-h"><b>Cổng thanh toán (mô phỏng)</b><span class="mono">${o.id}</span></div>
  <div class="gw-b"><div class="qr" aria-hidden="true">${cells.join('')}</div>
  <div class="stack"><div class="small muted">Số tiền cần thanh toán</div><div class="amount">${fmt(o.total)}</div><div class="small muted">${o.items.length} CV · Đơn vị nhận: CV Marketplace</div>
  <div class="row"><button class="btn pri" data-act="gw-ok">Thanh toán thành công</button><button class="btn danger" data-act="gw-fail">Thất bại / hủy</button></div></div></div></div>`;
};
VIEWS['kh-cv']=()=>{
  const hs=S.handovers.filter(h=>h.customer===S.me);
  return head('UC09','CV đã sở hữu','Thông tin đầy đủ và file CV của các CV đã thanh toán.')+
  (hs.length?`<div class="tw"><table><thead><tr><th>Mã CV</th><th>Ứng viên</th><th>Vị trí</th><th>Liên hệ</th><th>Ngày nhận</th><th></th></tr></thead><tbody>
  ${hs.map(h=>{const c=cvById(h.cv);return `<tr><td class="mono">${c.code}</td><td>${esc(c.name)}</td><td>${POS[c.pos]}</td><td class="small">${c.phone}<br>${esc(c.email)}</td><td class="num">${dshow(h.at)}</td><td class="r"><div class="row" style="justify-content:flex-end"><button class="btn sm" data-act="full" data-id="${c.id}">Xem CV</button><button class="btn sm" data-act="dl" data-id="${c.id}">Tải file</button></div></td></tr>`}).join('')}
  </tbody></table></div>`:`<div class="panel empty">Chưa sở hữu CV nào.</div>`);
};
function fullHTML(c,extra=''){
  return `<div class="drawer-h"><div><div class="code">${c.code}</div><h2>${esc(c.name)}</h2><div class="small muted">${POS[c.pos]} · ${pill(c.status)} ${otwPill(c)}</div></div><button class="btn sm" data-act="close">Đóng</button></div>
  <dl class="kv"><dt>Số điện thoại</dt><dd>${c.phone}</dd><dt>Email</dt><dd>${esc(c.email)}</dd><dt>Giới tính / năm sinh</dt><dd>${c.gender} · ${c.birth}</dd><dt>Khu vực</dt><dd>${c.area}</dd><dt>Trình độ</dt><dd>${c.edu}</dd><dt>Kinh nghiệm</dt><dd>${c.exp?c.exp+' năm':'Chưa có'} · ${esc(c.industry)}</dd><dt>Điểm mạnh</dt><dd>${esc(c.strengths)||'—'}</dd><dt>Lương mong muốn</dt><dd>${c.salary} triệu</dd><dt>Có thể nhận việc</dt><dd>${c.onboard}</dd>
  <dt>Source</dt><dd>${esc(acc(c.source)?.name||'—')}</dd><dt>Screener</dt><dd>${esc(acc(c.screener)?.name||'—')}</dd>${c.note?`<dt>Ghi chú sàng lọc</dt><dd>${esc(c.note)}</dd>`:''}<dt>File CV</dt><dd><span class="mono small">${c.code}_CV.pdf</span></dd></dl>${extra}`;
}
/* ---------- CV FORM (HR/CTV) ---------- */
function cvForm(uc,title,desc){
  return head(uc,title,desc)+`<form class="panel stack" data-form="cv-new">
  <fieldset><legend>Thông tin ứng viên</legend><div class="fgrid">
    <div class="field"><label for="cName">Họ tên</label><input id="cName" required></div>
    <div class="field"><label for="cPhone">Số điện thoại</label><input id="cPhone" required placeholder="09xx xxx xxx"></div>
    <div class="field"><label for="cEmail">Email</label><input id="cEmail" type="email" required></div>
    <div class="field"><label for="cGender">Giới tính</label><select id="cGender"><option>Nữ</option><option>Nam</option></select></div>
    <div class="field"><label for="cBirth">Năm sinh</label><input id="cBirth" type="number" min="1960" max="2008" value="2000" required></div>
    <div class="field"><label for="cZalo">Zalo (để gửi link cá nhân)</label><input id="cZalo" placeholder="Số Zalo"></div>
  </div></fieldset>
  <fieldset><legend>Thông tin công khai trên CV</legend><div class="fgrid">
    <div class="field"><label for="cPos">Vị trí</label><select id="cPos" required>${posOpts('','Chọn vị trí')}</select></div>
    <div class="field"><label for="cInd">Ngành</label><input id="cInd" required placeholder="Bán lẻ, Bảo hiểm…"></div>
    <div class="field"><label for="cExp">Số năm kinh nghiệm</label><input id="cExp" type="number" min="0" max="40" value="1" required></div>
    <div class="field"><label for="cArea">Khu vực</label><select id="cArea" required>${areaOpts('','Chọn khu vực')}</select></div>
    <div class="field"><label for="cEdu">Trình độ</label><select id="cEdu"><option>Đại học</option><option>Cao đẳng</option><option>Trung cấp</option><option>THPT</option></select></div>
    <div class="field"><label for="cSal">Lương mong muốn (triệu)</label><input id="cSal" type="number" min="3" max="100" value="10" required></div>
    <div class="field span3"><label for="cStr">Điểm mạnh</label><textarea id="cStr" placeholder="Kỹ năng, thành tích nổi bật"></textarea></div>
    <div class="field span3"><label for="cFile">File CV</label><input id="cFile" type="file" accept=".pdf,.doc,.docx"><span class="hint">PDF hoặc Word. Demo không lưu file thật.</span></div>
  </div></fieldset>
  <label class="check"><input type="checkbox" id="cConsent" required><span>Ứng viên đã được thông báo và đồng ý cho Light Human chia sẻ hồ sơ với doanh nghiệp tuyển dụng (Nghị định 13/2023/NĐ-CP).</span></label>
  <div id="cvErr"></div>
  <div class="row"><button class="btn pri">${S.role==='hr'?'Tạo CV':'Nộp CV'}</button><button type="button" class="btn" data-act="cv-sample">Điền dữ liệu mẫu</button></div></form>`;
}
VIEWS['hr-tao-cv']=()=>cvForm('UC04','Tạo CV','CV mới ở trạng thái Chờ sàng lọc, bạn được ghi nhận là Source.');
VIEWS['ctv-nop-cv']=()=>cvForm('UC04','Nộp CV','CV được HR sàng lọc trước khi đưa vào nguồn khả dụng. Bạn được ghi nhận là Source và nhận commission khi CV được bán.');
VIEWS['ctv-cv']=()=>{
  const list=S.cvs.filter(c=>c.source===S.me);
  return head('','CV đã nộp','Theo dõi kết quả sàng lọc và trạng thái Open to Work của CV bạn đã nộp.')+cvTable(list,false);
};
function cvTable(list,actions){
  return list.length?`<div class="tw"><table><thead><tr><th>Mã CV</th><th>Ứng viên</th><th>Vị trí</th><th>Sàng lọc</th><th>Open to Work</th><th class="r">Số lần bán</th><th></th></tr></thead><tbody>
  ${list.map(c=>`<tr><td class="mono">${c.code}</td><td>${esc(c.name)}</td><td>${POS[c.pos]}</td><td>${pill(c.status)}</td><td>${otwPill(c)}</td><td class="r num">${S.handovers.filter(h=>h.cv===c.id).length}</td><td class="r">${actions?`<button class="btn sm" data-act="hr-open" data-id="${c.id}">Chi tiết</button>`:''}</td></tr>`).join('')}
  </tbody></table></div>`:`<div class="panel empty">Chưa có CV.</div>`;
}
VIEWS['hr-sang-loc']=()=>{
  const q=S.cvs.filter(c=>c.status==='Chờ sàng lọc');
  return head('UC05','Sàng lọc CV','Đánh giá CV Đạt hoặc Không đạt. Khi Đạt, hệ thống gửi link cá nhân cho ứng viên qua Zalo OA / Email để ứng viên bật Open to Work.')+
  (q.length?`<div class="stack">${q.map(c=>`<div class="panel"><div class="panel-h"><div><span class="code">${c.code}</span> · <b>${esc(c.name)}</b> <span class="small muted">· nộp bởi ${esc(acc(c.source)?.name)} (${ROLE_NAME[acc(c.source)?.role]})</span></div>${pill(c.status)}</div>
  <div class="grid2"><dl class="kv small"><dt>Vị trí</dt><dd>${POS[c.pos]}</dd><dt>Kinh nghiệm</dt><dd>${c.exp} năm · ${esc(c.industry)}</dd><dt>Khu vực</dt><dd>${c.area}</dd><dt>Lương mong muốn</dt><dd>${c.salary} triệu</dd><dt>Liên hệ</dt><dd>${c.phone} · ${esc(c.email)}</dd><dt>Đồng ý chia sẻ</dt><dd>${c.consent?'Có':'Chưa'}</dd></dl>
  <form class="stack" data-form="screen" data-id="${c.id}"><div class="field"><label for="sn-${c.id}">Ghi chú sàng lọc</label><textarea id="sn-${c.id}" placeholder="Nhận xét về chất lượng, điều kiện của ứng viên"></textarea></div>
  <div id="se-${c.id}"></div><div class="row"><button class="btn pri" data-v="Đạt">Đạt</button><button class="btn danger" data-v="Không đạt">Không đạt</button></div></form></div></div>`).join('')}</div>`
  :`<div class="panel empty">Không còn CV chờ sàng lọc.</div>`);
};
VIEWS['hr-cv']=()=>{
  const list=S.cvs.filter(c=>c.source===S.me||c.screener===S.me);
  return head('UC06','CV của tôi','CV bạn tạo hoặc sàng lọc. Có thể cập nhật Open to Work thay ứng viên sau khi đã liên hệ xác nhận.')+cvTable(list,true);
};
function hrDetail(c){
  const can=c.status==='Đạt';
  return fullHTML(c,`<div class="panel stack"><h3>Cập nhật Open to Work thay ứng viên <span class="ucchip">UC06</span></h3>
  ${can?`<div class="otw-row"><div><b>${c.otw?'Đang bật':'Đang tắt'}</b><div class="small muted">${c.otwBy?`Cập nhật bởi ${esc(c.otwBy)} · ${dshow(c.otwAt)}`:'Ứng viên chưa xác nhận'}</div></div></div>
  <label class="check"><input type="checkbox" id="hrConfirm"><span>Tôi đã liên hệ trực tiếp và ứng viên xác nhận thay đổi này.</span></label>
  <div id="hrOtwErr"></div><div class="row"><button class="btn pri" data-act="hr-otw" data-id="${c.id}">${c.otw?'Tắt Open to Work':'Bật Open to Work'}</button><button class="btn" data-act="uv-open" data-id="${c.id}">Mở link cá nhân của ứng viên</button></div>`
  :`<div class="note warn">Chỉ CV đã sàng lọc Đạt mới có trạng thái Open to Work.</div>`}</div>`);
}
/* ---------- COMMISSION ---------- */
function commissionView(){
  const mine=S.commissions.filter(x=>x.account===S.me); const f=S.ui.comFilter;
  const list=mine.filter(x=>f==='all'||x.role===f);
  const sum=r=>mine.filter(x=>!r||x.role===r).reduce((a,b)=>a+b.amount,0);
  const roles=[...new Set(mine.map(x=>x.role))];
  return head('UC11','Commission của tôi','Commission được tạo tự động ngay khi đơn hàng thanh toán thành công. Mỗi vai trò trên cùng một CV được tính riêng.')+
  `<div class="kpis"><div class="kpi"><div class="k">Tổng commission</div><div class="v price">${fmt(sum())}</div><div class="s">${mine.length} khoản</div></div>
  ${['Source','Screener','Referral'].map(r=>`<div class="kpi"><div class="k">${r}</div><div class="v">${fmt(sum(r))}</div><div class="s">${mine.filter(x=>x.role===r).length} khoản</div></div>`).join('')}</div>
  <div class="row"><span class="small muted">Lọc theo vai trò</span>${['all',...roles].map(r=>`<button class="btn sm ${f===r?'pri':''}" data-act="com-filter" data-v="${r}">${r==='all'?'Tất cả':r}</button>`).join('')}</div>
  ${list.length?`<div class="tw"><table><thead><tr><th>Ngày</th><th>Đơn hàng</th><th>CV / Khách hàng</th><th>Vai trò</th><th class="r">Tỷ lệ</th><th class="r">Số tiền</th></tr></thead><tbody>
  ${list.map(x=>{const o=S.orders.find(o=>o.id===x.order);return `<tr><td class="num">${dshow(x.at)}</td><td class="mono">${x.order}</td><td>${x.cv?`<span class="mono">${cvById(x.cv).code}</span>`:esc(acc(o.customer).name)}</td><td>${pill(x.role)}</td><td class="r num">${x.rate}%</td><td class="r num">${fmt(x.amount)}</td></tr>`}).join('')}
  </tbody></table></div>`:`<div class="panel empty">Chưa có commission.</div>`}`;
}
VIEWS['hr-commission']=commissionView;VIEWS['ctv-commission']=commissionView;VIEWS['ngt-commission']=commissionView;
/* ---------- REFERRER ---------- */
VIEWS['ngt-link']=()=>{
  const me=acc(S.me); const link=`https://cvmarketplace.vn/dang-ky?ref=${me.refCode}`;
  const custs=S.accounts.filter(a=>a.refBy===S.me);
  return head('UC12','Link giới thiệu & khách hàng','Khách hàng đăng ký lần đầu qua link được gắn với bạn vĩnh viễn. Mỗi khách hàng mang lại một khoản hoa hồng Referral tại đơn thanh toán thành công đầu tiên.')+
  `<div class="panel stack"><h2>Link giới thiệu của bạn</h2><div class="row"><input id="refLink" readonly value="${link}" style="flex:1;min-width:0;font-family:var(--f-mono);font-size:.85rem;border:1px solid var(--line);border-radius:6px;padding:8px 10px;background:var(--sunken)"><button class="btn pri" data-act="copy-ref">Sao chép</button><button class="btn" data-act="ref-try" data-v="${me.refCode}">Mở thử</button></div>
  <p class="small muted">Mã giới thiệu: <span class="mono">${me.refCode}</span> · Tỷ lệ Referral hiện hành: ${S.cfg.ref}% giá trị đơn đầu tiên</p></div>
  <div class="tw"><table><thead><tr><th>Khách hàng</th><th>Ngày đăng ký</th><th>Đơn đầu tiên</th><th class="r">Hoa hồng Referral</th></tr></thead><tbody>
  ${custs.length?custs.map(k=>{const com=S.commissions.find(x=>x.role==='Referral'&&x.account===S.me&&acc(S.orders.find(o=>o.id===x.order).customer).id===k.id);const first=S.orders.filter(o=>o.customer===k.id&&o.status==='Đã thanh toán').slice(-1)[0];
  return `<tr><td>${esc(k.name)}</td><td class="num">${dshow(k.created)}</td><td>${first?`<span class="mono">${first.id}</span> · ${dshow(first.paidAt)}`:'<span class="muted">Chưa mua</span>'}</td><td class="r num">${com?fmt(com.amount):'—'}</td></tr>`}).join(''):`<tr><td colspan="4" class="empty">Chưa có khách hàng đăng ký qua link.</td></tr>`}
  </tbody></table></div>`;
};
/* ---------- ADMIN ---------- */
VIEWS['ad-tai-khoan']=()=>{
  const t=S.ui.tab; const pend=S.accounts.filter(a=>a.status==='Chờ duyệt');
  const tabs=[['pending',`Chờ duyệt (${pend.length})`],['create','Tạo và cấp tài khoản'],['all','Danh sách tài khoản']];
  let body='';
  if(t==='pending') body=pend.length?`<div class="stack">${pend.map(a=>`<div class="panel"><div class="panel-h"><div><b>${esc(a.name)}</b> <span class="small muted">· ${ROLE_NAME[a.role]}${a.kind?' ('+a.kind+')':''} · ${esc(a.email)} · đăng ký ${dshow(a.created)}</span></div>${pill(a.status)}</div>
    <form class="stack" data-form="approve" data-id="${a.id}"><div class="field"><label for="rj-${a.id}">Lý do từ chối (bắt buộc khi từ chối)</label><input id="rj-${a.id}" placeholder="Ví dụ: thông tin liên hệ không xác minh được"></div><div id="ae-${a.id}"></div>
    <div class="row"><button class="btn pri" data-v="ok">Duyệt</button><button class="btn danger" data-v="no">Từ chối</button></div></form></div>`).join('')}</div>`:`<div class="panel empty">Không có tài khoản chờ duyệt.</div>`;
  if(t==='create') body=`<form class="panel stack" data-form="grant" style="max-width:560px"><div class="field"><label for="gRole">Vai trò</label><select id="gRole"><option value="hr">HR</option><option value="ngt">Người giới thiệu (BD nội bộ)</option></select></div>
    <div class="field"><label for="gName">Họ tên</label><input id="gName" required></div><div class="field"><label for="gEmail">Email</label><input id="gEmail" type="email" required></div><div id="gErr"></div>
    <p class="small muted">Hệ thống tạo mật khẩu tạm, gửi thông tin đăng nhập qua email; người được cấp phải đổi mật khẩu ở lần đăng nhập đầu. Tài khoản BD được tạo link giới thiệu.</p><button class="btn pri">Tạo và gửi thông tin</button></form>`;
  if(t==='all') body=`<div class="tw"><table><thead><tr><th>Tên</th><th>Vai trò</th><th>Email</th><th>Ngày tạo</th><th>Trạng thái</th><th></th></tr></thead><tbody>
    ${S.accounts.filter(a=>a.role!=='admin').map(a=>`<tr><td>${esc(a.name)}</td><td>${ROLE_NAME[a.role]}${a.kind?` <span class="small muted">(${a.kind})</span>`:''}</td><td class="small">${esc(a.email)}</td><td class="num">${dshow(a.created)}</td><td>${pill(a.status)}${a.reason?`<div class="small muted">${esc(a.reason)}</div>`:''}</td>
    <td class="r">${a.status==='Hoạt động'?`<button class="btn sm danger" data-act="lock" data-id="${a.id}">Khóa</button>`:a.status==='Bị khóa'?`<button class="btn sm" data-act="unlock" data-id="${a.id}">Mở khóa</button>`:''}</td></tr>`).join('')}</tbody></table></div>`;
  return head('UC03','Quản lý tài khoản nội bộ','Duyệt tài khoản đối tác, cấp tài khoản HR và BD, khóa hoặc mở khóa tài khoản.')+
  `<div class="tabs" role="tablist">${tabs.map(([k,l])=>`<button role="tab" aria-selected="${t===k}" class="${t===k?'on':''}" data-act="tab" data-v="${k}">${l}</button>`).join('')}</div>${body}`;
};
VIEWS['ad-cau-hinh']=()=>{const c=S.cfg;
  return head('UC13','Cấu hình giá bán và tỷ lệ commission','Thay đổi áp dụng cho đơn hàng tạo sau thời điểm lưu. Commission đã phát sinh giữ nguyên tỷ lệ cũ. Giá trị hiện tại là giá trị mẫu.')+
  `<form class="panel stack" data-form="cfg" style="max-width:720px"><div class="fgrid">
  <div class="field"><label for="kPrice">Giá bán mỗi CV (đ)</label><input id="kPrice" type="number" min="1000" step="1000" value="${c.price}" required></div>
  <div class="field"><label for="kMin">Số CV tối thiểu mỗi đơn</label><input id="kMin" type="number" min="1" value="${c.minCV}" required></div><div></div>
  <div class="field"><label for="kSrc">Tỷ lệ Source (%)</label><input id="kSrc" type="number" min="0" max="100" step="0.5" value="${c.src}" required></div>
  <div class="field"><label for="kScr">Tỷ lệ Screener (%)</label><input id="kScr" type="number" min="0" max="100" step="0.5" value="${c.scr}" required></div>
  <div class="field"><label for="kRef">Tỷ lệ Referral (%)</label><input id="kRef" type="number" min="0" max="100" step="0.5" value="${c.ref}" required></div></div>
  <div id="kErr"></div><div class="row"><button class="btn pri">Lưu cấu hình</button><span class="small muted">Cập nhật lần cuối: ${esc(c.updatedBy)} · ${dshow(c.at)}</span></div></form>
  <div class="panel"><h2 style="margin-bottom:8px">Lịch sử thay đổi</h2><div class="tw"><table><thead><tr><th>Ngày</th><th>Người thay đổi</th><th>Nội dung</th></tr></thead><tbody>${S.cfgLog.map(l=>`<tr><td class="num">${dshow(l.at)}</td><td>${esc(l.by)}</td><td>${esc(l.text)}</td></tr>`).join('')}</tbody></table></div></div>`;
};
VIEWS['ad-dieu-chinh']=()=>{
  const id=S.ui.adjCv||S.cvs[0].id; const c=cvById(id);
  const opts=(role,cur)=>S.accounts.filter(a=>role==='Source'?['hr','ctv'].includes(a.role):a.role==='hr').filter(a=>a.status==='Hoạt động').map(a=>`<option value="${a.id}" ${a.id===cur?'selected':''}>${esc(a.name)} (${ROLE_NAME[a.role]})</option>`).join('');
  return head('UC14','Điều chỉnh Source/Screener','Chỉ Admin được sửa người tạo nguồn và người sàng lọc sau khi đã gán. Mọi thay đổi được lưu lịch sử kèm lý do.')+
  `<form class="panel stack" data-form="adjust" style="max-width:720px"><div class="fgrid">
  <div class="field"><label for="aCv">CV</label><select id="aCv" data-act="adj-cv">${S.cvs.map(v=>`<option value="${v.id}" ${v.id===id?'selected':''}>${v.code} · ${esc(v.name)}</option>`).join('')}</select></div>
  <div class="field"><label for="aSrc">Source</label><select id="aSrc">${opts('Source',c.source)}</select></div>
  <div class="field"><label for="aScr">Screener</label><select id="aScr"><option value="">Chưa có</option>${opts('Screener',c.screener)}</select></div>
  <div class="field span3"><label for="aReason">Lý do điều chỉnh</label><input id="aReason" required placeholder="Ví dụ: nhập nhầm người tạo nguồn"></div></div>
  <div class="small muted">Hiện tại: Source <b>${esc(acc(c.source)?.name||'—')}</b> · Screener <b>${esc(acc(c.screener)?.name||'—')}</b></div>
  <div id="aErr"></div><div><button class="btn pri">Lưu điều chỉnh</button></div></form>
  <div class="panel"><h2 style="margin-bottom:8px">Lịch sử điều chỉnh</h2>${S.attrLog.length?`<div class="tw"><table><thead><tr><th>Ngày</th><th>CV</th><th>Vai trò</th><th>Cũ</th><th>Mới</th><th>Lý do</th><th>Người sửa</th></tr></thead><tbody>
  ${S.attrLog.map(l=>`<tr><td class="num">${dshow(l.at)}</td><td class="mono">${l.code}</td><td>${l.role}</td><td>${esc(l.old)}</td><td>${esc(l.neu)}</td><td>${esc(l.reason)}</td><td>${esc(l.by)}</td></tr>`).join('')}</tbody></table></div>`:'<p class="small muted">Chưa có điều chỉnh nào.</p>'}</div>`;
};
VIEWS['ad-bao-cao']=()=>{
  const paid=S.orders.filter(o=>o.status==='Đã thanh toán'); const rev=paid.reduce((a,o)=>a+o.total,0);
  const com=S.commissions.reduce((a,x)=>a+x.amount,0);
  const months=['2026-09','2026-10','2026-11']; const byM=months.map(m=>paid.filter(o=>o.paidAt.startsWith(m)).reduce((a,o)=>a+o.total,0));
  const max=Math.max(...byM,1);
  const people=S.accounts.filter(a=>['hr','ctv','ngt'].includes(a.role)).map(a=>({a,src:S.cvs.filter(c=>c.source===a.id).length,sold:S.handovers.filter(h=>cvById(h.cv).source===a.id).length,com:S.commissions.filter(x=>x.account===a.id).reduce((s,x)=>s+x.amount,0)})).filter(p=>p.src||p.com).sort((x,y)=>y.com-x.com);
  return head('UC15','Báo cáo','Số liệu tổng hợp từ đơn hàng, thanh toán, CV và commission. Dữ liệu trong demo là dữ liệu mẫu.')+
  `<div class="kpis"><div class="kpi"><div class="k">Doanh thu</div><div class="v price">${fmt(rev)}</div><div class="s">${paid.length} đơn đã thanh toán</div></div>
  <div class="kpi"><div class="k">CV đã bàn giao</div><div class="v">${S.handovers.length}</div><div class="s">lượt bán</div></div>
  <div class="kpi"><div class="k">CV khả dụng</div><div class="v">${S.cvs.filter(available).length}</div><div class="s">trên ${S.cvs.length} CV trong hệ thống</div></div>
  <div class="kpi"><div class="k">Commission phát sinh</div><div class="v">${fmt(com)}</div><div class="s">${S.commissions.length} khoản</div></div></div>
  <div class="grid2"><div class="panel"><h2 style="margin-bottom:10px">Doanh thu theo tháng</h2>
  <div class="bars">${byM.map((v,i)=>`<div class="bar ${i===byM.length-1?'last':''}"><span>${(v/1e6).toLocaleString('vi-VN',{maximumFractionDigits:1})} tr</span><i style="height:${v/max*140}px"></i></div>`).join('')}</div>
  <div class="barlab">${months.map(m=>`<span>T${+m.slice(5)}/${m.slice(2,4)}</span>`).join('')}</div></div>
  <div class="panel"><h2 style="margin-bottom:10px">Hiệu quả người giới thiệu</h2><div class="tw"><table><thead><tr><th>Người giới thiệu</th><th class="r">KH đăng ký</th><th class="r">KH đã mua</th><th class="r">Referral</th></tr></thead><tbody>
  ${S.accounts.filter(a=>a.role==='ngt').map(a=>{const ks=S.accounts.filter(k=>k.refBy===a.id);const bought=ks.filter(k=>S.orders.some(o=>o.customer===k.id&&o.status==='Đã thanh toán')).length;return `<tr><td>${esc(a.name)}</td><td class="r num">${ks.length}</td><td class="r num">${bought}</td><td class="r num">${fmt(S.commissions.filter(x=>x.account===a.id&&x.role==='Referral').reduce((s,x)=>s+x.amount,0))}</td></tr>`}).join('')}</tbody></table></div></div></div>
  <div class="panel"><h2 style="margin-bottom:10px">Nguồn CV và commission theo người</h2><div class="tw"><table><thead><tr><th>Người</th><th>Vai trò</th><th class="r">CV tạo nguồn</th><th class="r">Lượt bán CV nguồn</th><th class="r">Commission</th></tr></thead><tbody>
  ${people.map(p=>`<tr><td>${esc(p.a.name)}</td><td>${ROLE_NAME[p.a.role]}</td><td class="r num">${p.src}</td><td class="r num">${p.sold}</td><td class="r num">${fmt(p.com)}</td></tr>`).join('')}</tbody></table></div></div>`;
};
VIEWS['ad-cv']=()=>head('','Tất cả CV','Admin xem được thông tin đầy đủ của mọi CV trong hệ thống.')+
  `<div class="tw"><table><thead><tr><th>Mã CV</th><th>Ứng viên</th><th>Liên hệ</th><th>Vị trí</th><th>Source</th><th>Screener</th><th>Sàng lọc</th><th>Open to Work</th><th></th></tr></thead><tbody>
  ${S.cvs.map(c=>`<tr><td class="mono">${c.code}</td><td>${esc(c.name)}</td><td class="small">${c.phone}</td><td>${POS[c.pos]}</td><td>${esc(acc(c.source)?.name||'—')}</td><td>${esc(acc(c.screener)?.name||'—')}</td><td>${pill(c.status)}</td><td>${otwPill(c)}</td><td><button class="btn sm" data-act="full" data-id="${c.id}">Xem</button></td></tr>`).join('')}</tbody></table></div>`;
VIEWS['ad-thong-bao']=()=>head('','Nhật ký thông báo','Thông báo hệ thống đã gửi qua Zalo OA / Email: link cá nhân, kết quả duyệt tài khoản, thông báo bàn giao CV.')+
  `<div class="tw"><table><thead><tr><th>Ngày</th><th>Người nhận</th><th>Kênh</th><th>Nội dung</th></tr></thead><tbody>${S.notis.map(n=>`<tr><td class="num">${dshow(n.at)}</td><td>${esc(n.to)}</td><td>${n.channel}</td><td>${esc(n.text)}</td></tr>`).join('')}</tbody></table></div>`;
/* ---------- CANDIDATE ---------- */
VIEWS['uv-link']=()=>{
  const c=S.cvs.find(x=>x.token===S.uvToken);
  const picker=`<div class="panel small" style="max-width:520px;margin:0 auto"><label for="uvPick" class="muted">Demo: chọn ứng viên để mở link cá nhân</label>
   <select id="uvPick" data-act="uv-pick" style="width:100%;margin-top:6px;padding:6px;border:1px solid var(--line);border-radius:6px;background:var(--surface)">${S.cvs.filter(x=>x.status==='Đạt').map(x=>`<option value="${x.token}" ${x.token===S.uvToken?'selected':''}>${x.code} · ${esc(x.name)}</option>`).join('')}<option value="bad" ${S.uvToken==='bad'?'selected':''}>Link không hợp lệ</option></select></div>`;
  const url=`https://cvmarketplace.vn/u/${esc(S.uvToken||'')}`;
  if(!c) return head('UC06','Trang link cá nhân','Trang ứng viên mở từ link gửi qua Zalo OA / Email, không cần đăng nhập.')+picker+
    `<div class="phone"><div class="small muted mono">${url}</div><div class="note err">Link không hợp lệ hoặc đã hết hiệu lực. Vui lòng liên hệ HR phụ trách để được gửi lại link.</div></div>`;
  return head('UC06','Trang link cá nhân','Trang ứng viên mở từ link gửi qua Zalo OA / Email, không cần đăng nhập. Chỉ cho phép bật hoặc tắt Open to Work.')+picker+
  `<div class="phone"><div class="small muted mono" style="overflow-wrap:anywhere">${url}</div>
  <div><div class="small muted">Xin chào</div><h2>${esc(c.name)}</h2><div class="small muted">Hồ sơ <span class="mono">${c.code}</span> · ${POS[c.pos]}</div></div>
  <div class="otw-row"><div><b>Open to Work</b><div class="small muted">${c.otw?'Hồ sơ đang được giới thiệu tới doanh nghiệp':'Hồ sơ đang tạm ẩn'}</div></div>
  <button class="switch" role="switch" aria-checked="${c.otw}" aria-label="Bật hoặc tắt Open to Work" data-act="uv-toggle"></button></div>
  <p class="small muted">Khi tắt, hồ sơ ngừng xuất hiện với doanh nghiệp mới. Các doanh nghiệp đã nhận hồ sơ trước đó vẫn giữ thông tin. Bạn được thông báo mỗi khi hồ sơ được chuyển cho doanh nghiệp.</p>
  <div class="small muted">Lần cập nhật gần nhất: ${c.otwAt?`${dshow(c.otwAt)} bởi ${esc(c.otwBy)}`:'chưa cập nhật'}</div>
  <div class="small"><b>Đã chuyển cho:</b> ${S.handovers.filter(h=>h.cv===c.id).map(h=>esc(acc(h.customer).name)+' ('+dshow(h.at)+')').join(', ')||'chưa có doanh nghiệp nào'}</div></div>`;
};

/* ===================== EVENTS ===================== */
document.addEventListener('click',e=>{
  const g=e.target.closest('[data-go]'); if(g){e.preventDefault();closeOverlay();go(g.dataset.go);return}
  const a=e.target.closest('[data-act]'); if(!a)return;
  const act=a.dataset.act, id=a.dataset.id, v=a.dataset.v;
  if(act==='close-scrim'&&e.target!==a)return;
  if(a.tagName==='SELECT')return;
  const A={
    'close-scrim':closeOverlay, close:closeOverlay,
    logout:()=>{S.role='guest';S.me=null;S.cart=[];S.ui.login=null;go('dang-nhap')},
    reset:()=>{const k={role:S.role,me:S.me,uvToken:S.uvToken};seed();Object.assign(S,k);if(S.me&&!acc(S.me)){S.role='guest';S.me=null}render();toast('Đã khôi phục dữ liệu mẫu')},
    'fill-login':()=>{S.ui.login={email:acc(id).email};render()},
    'reg-type':()=>{S.ui.regType=v;render()},
    'ref-try':()=>{if(S.role!=='guest'){window.open('index.html?ref='+encodeURIComponent(v)+'#dang-ky','_blank','noopener');return}S.ui.regRef=v;S.ui.regType='kh';go('dang-ky')},
    preview:()=>drawer(previewHTML(cvById(id))),
    full:()=>drawer(fullHTML(cvById(id))),
    'cart-add':()=>{if(owned(S.me).has(id)){toast('Bạn đã sở hữu CV này',true);return}S.cart.push(id);render();toast(`Đã chọn ${cvById(id).code} · ${S.cart.length}/${S.cfg.minCV} CV`)},
    'cart-del':()=>{S.cart=S.cart.filter(x=>x!==id);render()},
    'create-order':()=>{const mine=owned(S.me);if(S.cart.some(x=>mine.has(x))){toast('Đơn có CV đã sở hữu, vui lòng bỏ ra',true);return}
      if(S.cart.length<S.cfg.minCV){toast(`Cần tối thiểu ${S.cfg.minCV} CV`,true);return}
      const o=createOrder(S.me,[...S.cart]);S.cart=[];toast(`Đã tạo đơn ${o.id} · ${fmt(o.total)}`);go('kh-don-hang')},
    pay:()=>{S.ui.payOrder=id;S.ui.payResult=null;go('kh-thanh-toan')},
    'gw-ok':()=>{const o=S.orders.find(x=>x.id===S.ui.payOrder);if(o.status!=='Chờ thanh toán'){S.ui.payResult={ok:true,steps:['Giao dịch đã được xử lý trước đó, hệ thống bỏ qua để không ghi nhận trùng']};render();return}
      const steps=payOk(o);S.ui.payResult={ok:true,steps,order:o.id};render();toast('Đã gửi thông báo bàn giao cho ứng viên qua Zalo OA / Email')},
    'gw-fail':()=>{const o=S.orders.find(x=>x.id===S.ui.payOrder);payFail(o);S.ui.payResult={ok:false,order:o.id};render()},
    'pay-done':()=>{S.ui.payResult=null;go('kh-don-hang')},
    dl:()=>toast(`Demo: tải ${cvById(id).code}_CV.pdf (không có file thật)`),
    'cv-sample':()=>{const f=(i,val)=>{const el=document.getElementById(i);if(el)el.value=val};f('cName','Phan Thị Yến');f('cPhone','0987 654 321');f('cEmail','yen.pt@gmail.com');f('cZalo','0987 654 321');f('cPos','CS');f('cInd','Ngân hàng');f('cExp','2');f('cArea','TP. HCM');f('cSal','11');f('cStr','Tư vấn sản phẩm thẻ, xử lý khiếu nại qua tổng đài');document.getElementById('cConsent').checked=true},
    'hr-open':()=>drawer(hrDetail(cvById(id))),
    'hr-otw':()=>{const c=cvById(id);if(!document.getElementById('hrConfirm').checked){document.getElementById('hrOtwErr').innerHTML='<div class="note err">Xác nhận đã liên hệ với ứng viên trước khi cập nhật thay.</div>';return}
      c.otw=!c.otw;c.otwBy=acc(S.me).name+' (HR)';c.otwAt=nowISO();drawer(hrDetail(c));render();drawer(hrDetail(c));toast(`${c.code}: Open to Work ${c.otw?'đã bật':'đã tắt'}`)},
    'uv-open':()=>{window.open('u.html?t='+cvById(id).token,'_blank','noopener')},
    'com-filter':()=>{S.ui.comFilter=v;render()},
    'copy-ref':()=>{const el=document.getElementById('refLink');try{navigator.clipboard.writeText(el.value).then(()=>toast('Đã sao chép link giới thiệu'),()=>{el.select();toast('Đã chọn link, nhấn Ctrl+C để sao chép')})}catch(_){el.select();toast('Đã chọn link, nhấn Ctrl+C để sao chép')}},
    tab:()=>{S.ui.tab=v;render()},
    lock:()=>{const x=acc(id);x.status='Bị khóa';render();toast(`Đã khóa tài khoản ${x.name}`)},
    unlock:()=>{const x=acc(id);x.status='Hoạt động';render();toast(`Đã mở khóa tài khoản ${x.name}`)},
    'uv-toggle':()=>{const c=S.cvs.find(x=>x.token===S.uvToken);c.otw=!c.otw;c.otwBy='Ứng viên';c.otwAt=nowISO();render();toast(c.otw?'Đã bật Open to Work. Hồ sơ được đưa vào nguồn khả dụng.':'Đã tắt Open to Work. Hồ sơ ngừng hiển thị với doanh nghiệp mới.')}
  };
  if(A[act]){e.preventDefault();A[act]()}
});
document.addEventListener('change',e=>{
  const t=e.target;
    if(t.dataset.act==='uv-pick'){S.uvToken=t.value;history.replaceState(null,'','?t='+encodeURIComponent(t.value));render();return}
  if(t.dataset.act==='adj-cv'){S.ui.adjCv=t.value;render();return}
  if(t.closest('[data-form="filter"]')){Object.assign(S.ui,{pos:val('fpos'),area:val('farea'),exp:val('fexp'),sal:val('fsal')});render()}
});
document.addEventListener('input',e=>{if(e.target.id==='fq'){S.ui.q=e.target.value;clearTimeout(window.__qt);window.__qt=setTimeout(()=>{render();const el=document.getElementById('fq');el.focus();el.setSelectionRange(el.value.length,el.value.length)},250)}});
const val=id=>document.getElementById(id)?.value?.trim()??'';
const err=(box,msg)=>{document.getElementById(box).innerHTML=`<div class="note err">${msg}</div>`};
document.addEventListener('submit',e=>{
  e.preventDefault(); const f=e.target, kind=f.dataset.form, sub=e.submitter;
  if(kind==='filter')return;
  if(kind==='login'){
    const a=S.accounts.find(x=>x.email.toLowerCase()===val('lgEmail').toLowerCase());
    if(!a||!val('lgPw')){S.ui.login={email:val('lgEmail'),err:'Email hoặc mật khẩu không đúng. Vui lòng nhập lại.'};render();return}
    if(!PORTAL_ROLES[PORTAL].includes(a.role)){S.ui.login={email:a.email,err:PORTAL==='admin'?'Trang này chỉ dành cho Admin. Người dùng khác đăng nhập tại trang sử dụng.':'Tài khoản Admin đăng nhập tại trang quản trị.'};render();return}
    if(a.status!=='Hoạt động'){S.ui.login={email:a.email,err:`Tài khoản đang ở trạng thái "${a.status}"${a.reason?': '+esc(a.reason):''}. Không thể đăng nhập.`};render();return}
    if(a.mustChange){S.ui.login={step:'change',id:a.id};render();return}
    S.ui.login=null;setRole(a.role,a.id);toast(`Đăng nhập thành công · ${ROLE_NAME[a.role]}`);return}
  if(kind==='change-pw'){
    if(val('np1').length<8)return err('cpErr','Mật khẩu mới cần tối thiểu 8 ký tự.');
    if(val('np1')!==val('np2'))return err('cpErr','Hai mật khẩu không khớp.');
    const a=acc(S.ui.login.id);a.mustChange=false;S.ui.login=null;setRole(a.role,a.id);toast('Đã đổi mật khẩu. Đăng nhập thành công.');return}
  if(kind==='register'){
    const t=S.ui.regType, email=val('rgEmail');
    if(S.accounts.some(x=>x.email.toLowerCase()===email.toLowerCase()))return err('rgErr','Email đã tồn tại. Vui lòng dùng email khác hoặc đăng nhập.');
    if(val('rgPw').length<8)return err('rgErr','Mật khẩu cần tối thiểu 8 ký tự.');
    const ref=S.accounts.find(a=>a.refCode&&a.refCode===S.ui.regRef&&a.status==='Hoạt động');
    const a={id:'a'+(seq.id++),role:t,email,phone:val('rgPhone'),created:nowISO()};
    if(t==='kh'){Object.assign(a,{name:val('rgCompany'),contact:val('rgContact'),status:'Hoạt động',refBy:ref?.id||null});S.accounts.push(a);S.ui.regRef='';setRole('kh',a.id);toast(ref?`Đăng ký thành công. Đã gắn Người giới thiệu ${ref.name}.`:'Đăng ký thành công.');return}
    Object.assign(a,{name:val('rgName'),status:'Chờ duyệt',kind:t==='ngt'?'Đối tác':undefined});S.accounts.push(a);
    f.outerHTML=`<div class="panel stack"><div class="note ok">Đã gửi đăng ký tài khoản ${ROLE_NAME[t]} cho <b>${esc(a.name)}</b>. Tài khoản đang chờ Admin duyệt; kết quả duyệt được gửi qua email ${esc(email)}.</div><button class="btn" data-go="dang-nhap">Về trang đăng nhập</button></div>`;return}
  if(kind==='cv-new'){
    if(!val('cPos')||!val('cArea'))return err('cvErr','Chọn vị trí và khu vực.');
    const ph=val('cPhone').replace(/\s/g,''), em=val('cEmail').toLowerCase();
    const dup=S.cvs.find(c=>c.phone.replace(/\s/g,'')===ph||c.email.toLowerCase()===em);
    if(dup)return err('cvErr',`Ứng viên đã tồn tại trong hệ thống (${dup.code}). Không tạo CV mới.`);
    const pos=val('cPos');const n=S.cvs.filter(c=>c.pos===pos).length+1;
    const c={id:'cv'+(seq.id++),code:pos+'-'+String(n).padStart(3,'0'),pos,name:val('cName'),birth:+val('cBirth'),gender:val('cGender'),area:val('cArea'),exp:+val('cExp'),salary:+val('cSal'),edu:val('cEdu'),strengths:val('cStr'),industry:val('cInd'),phone:val('cPhone'),email:val('cEmail'),workStatus:'Đang tìm việc',onboard:'Ngay',source:S.me,screener:null,status:'Chờ sàng lọc',otw:false,note:'',token:'u'+Math.floor(80000+Math.random()*9999),consent:true,created:nowISO(),otwBy:null,otwAt:null};
    S.cvs.push(c);toast(`Đã ${S.role==='hr'?'tạo':'nộp'} ${c.code} · Chờ sàng lọc`);go(S.role==='hr'?'hr-sang-loc':'ctv-cv');return}
  if(kind==='screen'){
    const c=cvById(f.dataset.id), r=sub?.dataset.v, note=document.getElementById('sn-'+c.id).value.trim();
    if(r==='Không đạt'&&!note)return err('se-'+c.id,'Nhập ghi chú lý do không đạt.');
    c.status=r;c.screener=S.me;c.note=note;
    if(r==='Đạt'){notify(c.name,'Zalo OA / Email',`Link cá nhân để bật/tắt Open to Work: https://cvmarketplace.vn/u/${c.token}`);toast(`${c.code} Đạt. Đã gửi link cá nhân cho ứng viên qua Zalo OA / Email.`)}else toast(`${c.code} Không đạt.`);
    render();return}
  if(kind==='approve'){
    const a=acc(f.dataset.id), r=sub?.dataset.v, reason=document.getElementById('rj-'+a.id).value.trim();
    if(r==='no'&&!reason)return err('ae-'+a.id,'Nhập lý do từ chối trước khi xác nhận.');
    if(r==='ok'){a.status='Hoạt động';if(a.role==='ngt')a.refCode=a.name.split(' ').pop().toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/Đ/g,'D')+Math.floor(10+Math.random()*89);notify(a.name,'Email','Tài khoản đã được duyệt'+(a.refCode?`, link giới thiệu: ${a.refCode}`:''));toast(`Đã duyệt ${a.name}${a.refCode?' · tạo link giới thiệu '+a.refCode:''}`)}
    else{a.status='Từ chối';a.reason=reason;notify(a.name,'Email','Tài khoản bị từ chối: '+reason);toast(`Đã từ chối ${a.name}`)}
    render();return}
  if(kind==='grant'){
    const email=val('gEmail');if(S.accounts.some(x=>x.email.toLowerCase()===email.toLowerCase()))return err('gErr','Email đã tồn tại.');
    const role=val('gRole');const a={id:'a'+(seq.id++),role,name:val('gName'),email,status:'Hoạt động',mustChange:true,created:nowISO()};
    if(role==='ngt'){a.kind='BD nội bộ';a.refCode=a.name.split(' ').pop().toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/Đ/g,'D')+Math.floor(10+Math.random()*89)}
    S.accounts.push(a);notify(a.name,'Email','Thông tin đăng nhập và mật khẩu tạm đã được gửi');S.ui.tab='all';render();toast(`Đã tạo tài khoản ${ROLE_NAME[role]} và gửi email cho ${a.name}`);return}
  if(kind==='cfg'){
    const p=+val('kPrice'),m=+val('kMin'),s1=+val('kSrc'),s2=+val('kScr'),s3=+val('kRef');
    if(p<=0||m<1)return err('kErr','Giá bán và số CV tối thiểu phải lớn hơn 0.');
    if(s1+s2>100||[s1,s2,s3].some(x=>x<0||x>100))return err('kErr','Tỷ lệ phải nằm trong khoảng 0–100% và tổng Source + Screener không vượt 100%.');
    Object.assign(S.cfg,{price:p,minCV:m,src:s1,scr:s2,ref:s3,updatedBy:acc(S.me).name,at:nowISO()});
    S.cfgLog.unshift({at:nowISO(),by:acc(S.me).name,text:`Giá ${fmt(p)}/CV · tối thiểu ${m} CV · Source ${s1}% · Screener ${s2}% · Referral ${s3}%`});render();toast('Đã lưu cấu hình. Áp dụng cho đơn hàng mới.');return}
  if(kind==='adjust'){
    const c=cvById(val('aCv')),reason=val('aReason'),ns=val('aSrc'),nc=val('aScr')||null;
    if(!reason)return err('aErr','Nhập lý do điều chỉnh.');
    if(ns===c.source&&nc===c.screener)return err('aErr','Chưa có thay đổi nào so với hiện tại.');
    const by=acc(S.me).name;
    if(ns!==c.source)S.attrLog.unshift({at:nowISO(),code:c.code,role:'Source',old:acc(c.source)?.name||'—',neu:acc(ns)?.name||'—',reason,by});
    if(nc!==c.screener)S.attrLog.unshift({at:nowISO(),code:c.code,role:'Screener',old:acc(c.screener)?.name||'—',neu:acc(nc)?.name||'—',reason,by});
    c.source=ns;c.screener=nc;render();toast(`Đã điều chỉnh ${c.code} và lưu lịch sử`);return}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOverlay()});

/* ===================== BOOT ===================== */
if(!restore()) seed();
(function(){
  const qs=new URLSearchParams(location.search);
  if(PORTAL==='uv'){S.role='uv';S.uvToken=qs.get('t')||S.cvs.find(c=>c.status==='Đạt'&&!c.otw)?.token;render();return}
  const ses=sesLoad();
  if(ses&&ses.me&&acc(ses.me)&&PORTAL_ROLES[PORTAL].includes(ses.role)){S.role=ses.role;S.me=ses.me;S.cart=ses.cart||[]}else{S.role='guest';S.me=null}
  if(qs.get('ref')&&PORTAL==='user'&&S.role==='guest'){S.ui.regRef=qs.get('ref');S.ui.regType='kh';if(!location.hash)location.hash='dang-ky'}
  render();
})();
