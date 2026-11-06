
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
      workStatus:i%3?'Đang đi làm':'Đang tìm việc',onboard:['Trong 1 tháng','Trong 2 tuần','Ngay'][i%3],
      source:src,screener:scr,status:status||'Đạt',otw,note:status==='Không đạt'?'Mức lương mong muốn cao hơn mặt bằng vị trí, thiếu kinh nghiệm phù hợp.':'',
      token:'u'+(73120+i*17),consent:true,created:'2026-'+(i<6?'09':'10')+'-'+String(5+i).padStart(2,'0'),otwBy:otw?'Ứng viên':null,otwAt:otw?'2026-10-12':null};
  });
  cvs.forEach(c=>{if(c.status==='Chờ sàng lọc')Object.assign(c,{exp:null,salary:null,edu:'',strengths:'',industry:'',gender:'',birth:null,workStatus:'',onboard:'',memo:'Ứng viên còn nhu cầu, cần HR gọi xác nhận lương mong muốn'})});
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
  kh:[['kh-tim-kiem','Tìm kiếm CV','UC07'],['kh-gio','Đơn đang chọn','UC08'],['kh-don-hang','Đơn hàng','UC10'],['kh-cv','CV đã mua','UC09']],
  hr:[['hr-tao-cv','Tạo CV','UC04'],['hr-sang-loc','Sàng lọc CV','UC05'],['hr-cv','CV của tôi','UC06'],['hr-commission','Commission của tôi','UC11']],
  ctv:[['ctv-nop-cv','Nộp CV','UC04'],['ctv-cv','CV đã nộp',''],['ctv-commission','Commission của tôi','UC11']],
  ngt:[['ngt-link','Link & khách hàng','UC12'],['ngt-commission','Commission của tôi','UC11']],
  admin:[['ad-bao-cao','Báo cáo','UC15'],['ad-tai-khoan','Tài khoản','UC03'],['ad-cv','CV',''],['ad-dieu-chinh','Source/Screener','UC14'],['ad-cau-hinh','Cấu hình','UC13'],['ad-thong-bao','Thông báo','']],
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
const head=(uc,title,desc,right='')=>`<div class="pagehead"><div>${(uc&&SHOW_UC)?`<div class="crumb"><span class="ucchip">${uc}</span></div>`:''}<h1>${title}</h1>${desc?`<p>${desc}</p>`:''}</div>${right}</div>`;
const pill=(s)=>{const m={'Đổi mật khẩu':'p-warn','Đạt':'p-ok','Hoạt động':'p-ok','Đã thanh toán':'p-ok','Thành công':'p-ok','Đã gửi':'p-ok','Chờ sàng lọc':'p-warn','Chờ duyệt':'p-warn','Chờ thanh toán':'p-warn','Không đạt':'p-bad','Bị khóa':'p-bad','Từ chối':'p-bad','Thất bại':'p-bad'};return `<span class="pill ${m[s]||'p-neutral'}">${esc(s)}</span>`};
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
    <div id="lgErr">${L?.err||''}</div>
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
  ${ref?(refAcc?notice('info','Bạn được giới thiệu bởi '+esc(refAcc.name),'Mã giới thiệu <span class="mono">'+esc(ref)+'</span> sẽ được ghi nhận khi bạn đăng ký tài khoản Khách hàng.'):notice('warn','Mã giới thiệu không còn hiệu lực','Bạn vẫn đăng ký bình thường, chỉ là tài khoản sẽ không gắn với người giới thiệu.')):''}
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
    `<div class="panel stack">${r.ok?`<ul class="steps">${r.steps.map((s,i)=>`<li><span class="d">${i+1}</span><span>${esc(s)}</span></li>`).join('')}</ul>`:notice('err','Thanh toán chưa thành công','Giao dịch bị hủy hoặc cổng thanh toán từ chối. Bạn chưa bị trừ tiền, đơn hàng vẫn được giữ để thanh toán lại.')}
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
  <dl class="kv"><dt>Số điện thoại</dt><dd>${c.phone}</dd><dt>Email</dt><dd>${esc(c.email)}</dd><dt>Giới tính / năm sinh</dt><dd>${c.gender||'—'} · ${c.birth||'—'}</dd><dt>Khu vực</dt><dd>${c.area}</dd><dt>Trình độ</dt><dd>${c.edu||'—'}</dd><dt>Kinh nghiệm</dt><dd>${c.exp!=null?(c.exp?c.exp+' năm':'Chưa có'):'—'} · ${esc(c.industry)||'—'}</dd><dt>Điểm mạnh</dt><dd>${esc(c.strengths)||'—'}</dd><dt>Lương mong muốn</dt><dd>${c.salary!=null?c.salary+' triệu':'—'}</dd><dt>Có thể nhận việc</dt><dd>${c.onboard||'—'}</dd>
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
  :notice('info','Chưa thể cập nhật Open to Work','Chỉ CV đã sàng lọc Đạt mới có trạng thái Open to Work.')}</div>`);
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
    `<div class="phone"><div class="small muted mono">${url}</div>${notice('err','Link không còn hiệu lực','Link có thể đã hết hạn hoặc bị nhập sai. Vui lòng liên hệ HR đã gửi link để được cấp lại.')}</div>`;
  return head('UC06','Trang link cá nhân','Trang ứng viên mở từ link gửi qua Zalo OA / Email, không cần đăng nhập. Chỉ cho phép bật hoặc tắt Open to Work.')+picker+
  `<div class="phone"><div class="small muted mono" style="overflow-wrap:anywhere">${url}</div>
  <div><div class="small muted">Xin chào</div><h2>${esc(c.name)}</h2><div class="small muted">Hồ sơ <span class="mono">${c.code}</span> · ${POS[c.pos]}</div></div>
  <div class="otw-row"><div><b>Open to Work</b><div class="small muted">${c.otw?'Hồ sơ đang được giới thiệu tới doanh nghiệp':'Hồ sơ đang tạm ẩn'}</div></div>
  <button class="switch" role="switch" aria-checked="${c.otw}" aria-label="Bật hoặc tắt Open to Work" data-act="uv-toggle"></button></div>
  <p class="small muted">Khi tắt, hồ sơ ngừng xuất hiện với doanh nghiệp mới. Các doanh nghiệp đã nhận hồ sơ trước đó vẫn giữ thông tin. Bạn được thông báo mỗi khi hồ sơ được chuyển cho doanh nghiệp.</p>
  <div class="small muted">Lần cập nhật gần nhất: ${c.otwAt?`${dshow(c.otwAt)} bởi ${esc(c.otwBy)}`:'chưa cập nhật'}</div>
  <div class="small"><b>Đã chuyển cho:</b> ${S.handovers.filter(h=>h.cv===c.id).map(h=>esc(acc(h.customer).name)+' ('+dshow(h.at)+')').join(', ')||'chưa có doanh nghiệp nào'}</div></div>`;
};

/* ===================== UI v2 (giao diện thân thiện) ===================== */
let SHOW_UC=false; try{SHOW_UC=localStorage.getItem('cvm_show_uc')==='1'}catch(_){}
const ICON={
  err:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 7v6M12 16.5v.5"/></svg>',
  warn:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17v.5"/></svg>',
  info:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7.5V8"/></svg>',
  ok:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m7.5 12.5 3 3 6-6.5"/></svg>',
  time:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 2"/></svg>',
  lock:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  cart:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6.2"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
  search:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
};
function notice(type,title,text){
  const ic={err:ICON.err,warn:ICON.warn,info:ICON.info,ok:ICON.ok,time:ICON.time,lock:ICON.lock}[type]||ICON.info;
  const cls={time:'warn',lock:'err'}[type]||type;
  return `<div class="msg msg-${cls}" role="${cls==='err'?'alert':'status'}"><span class="msg-ic">${ic}</span><div><div class="msg-t">${title}</div>${text?`<div class="msg-d">${text}</div>`:''}</div></div>`;
}
function statusMsg(a){
  if(a.status==='Chờ duyệt') return notice('time','Tài khoản đang chờ duyệt','Đăng ký của bạn đã được gửi tới bộ phận vận hành. Bạn sẽ nhận email ngay khi tài khoản được kích hoạt.');
  if(a.status==='Bị khóa') return notice('lock','Tài khoản đang tạm khóa','Vui lòng liên hệ quản trị viên Light Human để được hỗ trợ mở khóa.');
  if(a.status==='Từ chối') return notice('err','Đăng ký chưa được chấp thuận',`${a.reason?'Lý do: '+esc(a.reason)+'. ':''}Bạn có thể liên hệ Light Human để được hướng dẫn thêm.`);
  return notice('err','Chưa thể đăng nhập','Vui lòng thử lại sau.');
}
function toast(msg,isErr){
  const t=document.createElement('div');t.className='toast'+(isErr?' err':'');
  t.innerHTML=`<span class="msg-ic">${isErr?ICON.err:ICON.ok}</span><span>${esc(msg)}</span>`;
  const box=document.getElementById('toasts');box.appendChild(t);while(box.children.length>3)box.firstChild.remove();setTimeout(()=>t.remove(),3800);
}
const initials=n=>n.split(' ').filter(Boolean).slice(-2).map(w=>w[0]).join('').toUpperCase();
function layout(){
  const top=document.getElementById('topbar'), shell=document.getElementById('shell');
  const mode=S.route==='dang-nhap'||S.route==='dang-ky'?'auth':(PORTAL==='uv'?'bare':'top');
  document.body.dataset.layout=mode;
  if(top) top.hidden=mode!=='top';
}
function render(){
  let r=location.hash.slice(1)||NAV[S.role][0][0];
  if(!VIEWS[r]||!(NAV[S.role].some(i=>i[0]===r)||(r==='kh-thanh-toan'&&S.role==='kh')))r=NAV[S.role][0][0];
  S.route=r;
  if(S.role==='uv'&&!S.uvToken) S.uvToken=S.cvs.find(c=>c.status==='Đạt'&&!c.otw)?.token;
  layout(); renderSide();
  document.getElementById('main').innerHTML=(VIEWS[r]||VIEWS[NAV[S.role][0][0]])();
  window.scrollTo(0,0); save();
}
function renderSide(){
  const me=acc(S.me), items=NAV[S.role], mode=document.body.dataset.layout;
  const side=document.getElementById('side'), top=document.getElementById('topbar');
  if(mode==='top'){
    side.innerHTML='';
    const nav=items.filter(i=>i[0]!=='kh-gio');
    const n=S.cart.length;
    top.innerHTML=`<div class="tb-in">
      <a class="tb-brand" href="#${items[0][0]}"><img src="assets/logo.png" alt="Light Human"><span>${PORTAL==='admin'?'Quản trị CV Marketplace':'CV Marketplace'}</span></a>
      <nav class="tb-nav" aria-label="Chức năng">${nav.map(([id,l])=>`<a href="#${id}" class="${S.route===id||(id==='kh-don-hang'&&S.route==='kh-thanh-toan')?'on':''}">${l}</a>`).join('')}</nav>
      <div class="tb-right">${S.role==='kh'?`<a class="tb-cart ${S.route==='kh-gio'?'on':''}" href="#kh-gio" aria-label="Giỏ CV">${ICON.cart}${n?`<b>${n}</b>`:''}</a>`:''}
        <details class="tb-user"><summary><span class="av">${initials(me?.name||'?')}</span><span class="tb-un">${esc(me?.name||'')}</span></summary>
          <div class="tb-menu"><div class="small muted">${ROLE_NAME[S.role]}</div><div style="font-weight:600">${esc(me?.name||'')}</div><div class="small muted">${esc(me?.email||'')}</div>
          <hr><button class="link" data-act="logout">Đăng xuất</button></div></details></div></div>`;
    return;
  }
  if(mode==='auth'||mode==='bare'){side.innerHTML='';return}
  side.innerHTML=`
    <div class="brand"><img src="assets/logo.png" alt="Light Human"><div class="brand-sub">Quản trị CV Marketplace</div></div>
    <nav class="menu" aria-label="Chức năng">${items.map(([id,l])=>`<a href="#${id}" class="${S.route===id?'on':''}"><span>${l}</span></a>`).join('')}</nav>
    <div class="who"><span class="av">${initials(me?.name||'?')}</span><div style="min-width:0"><div style="font-weight:600">${esc(me?.name||'')}</div><button class="link small" data-act="logout">Đăng xuất</button></div></div>`;
}
function authShell(inner){
  const isAdmin=PORTAL==='admin';
  return `<div class="auth2"><section class="auth-brand">
    <div class="ab-logo"><img src="assets/mark.png" alt=""><span>Light Human</span></div>
    <h2>${isAdmin?'Quản trị <em>CV Marketplace</em>':'Nguồn ứng viên <em>đã sàng lọc</em>, sẵn sàng cho doanh nghiệp'}</h2>
    <ul>${(isAdmin?['Duyệt và cấp tài khoản cho đối tác','Cấu hình giá bán, tỷ lệ commission','Theo dõi doanh thu và hiệu quả nguồn CV']
      :['Hồ sơ được HR của Light Human đánh giá trước khi đăng','Xem trước thông tin, chỉ trả tiền cho CV phù hợp','Nhận đầy đủ thông tin ngay sau khi thanh toán']).map(x=>`<li>${ICON.ok}<span>${x}</span></li>`).join('')}</ul>
  </section><section class="auth-form">${inner}</section></div>`;
}
VIEWS['dang-nhap']=()=>{
  const L=S.ui.login;
  if(L&&L.step==='change') return authShell(`<h1>Đặt mật khẩu mới</h1><p class="muted">Đây là lần đầu bạn đăng nhập bằng tài khoản được cấp. Hãy đặt mật khẩu riêng để tiếp tục.</p>
   <form class="stack" data-form="change-pw"><div class="field"><label for="np1">Mật khẩu mới</label><input id="np1" type="password" required minlength="8" placeholder="Tối thiểu 8 ký tự"></div>
   <div class="field"><label for="np2">Nhập lại mật khẩu mới</label><input id="np2" type="password" required></div>
   <div id="cpErr"></div><button class="btn pri big">Lưu và tiếp tục</button></form>`);
  const pool=S.accounts.filter(a=>PORTAL_ROLES[PORTAL].includes(a.role));
  const quick=PORTAL_ROLES[PORTAL].map(r=>pool.find(a=>a.id===DEFAULT_ACC[r]&&a.status==='Hoạt động')||pool.find(a=>a.role===r&&a.status==='Hoạt động'&&!a.mustChange)).filter(Boolean);
  return authShell(`<h1>${PORTAL==='admin'?'Đăng nhập quản trị':'Chào mừng bạn trở lại'}</h1>
  <p class="muted">${PORTAL==='admin'?'Dành cho quản trị viên vận hành hệ thống.':'Đăng nhập để tìm kiếm và quản lý CV.'}</p>
  <form class="stack" data-form="login">
    <div class="field"><label for="lgEmail">Email</label><input id="lgEmail" type="email" required autocomplete="username" placeholder="ten@congty.vn" value="${esc(L?.email||'')}"></div>
    <div class="field"><label for="lgPw">Mật khẩu</label><input id="lgPw" type="password" required autocomplete="current-password" placeholder="Nhập mật khẩu" value="${L?.email?'demo1234':''}"></div>
    <div id="lgErr">${L?.err||''}</div>
    <button class="btn pri big">Đăng nhập</button>
  </form>
  ${PORTAL==='user'?`<p class="center muted">Chưa có tài khoản? <button type="button" class="link" data-go="dang-ky">Đăng ký ngay</button></p>`:''}
  <div class="demo-box"><div class="demo-h"><span class="tag-demo">Demo</span> Đăng nhập nhanh</div>
    <div class="quick">${quick.map(a=>`<button type="button" data-act="quick-login" data-id="${a.id}"><span class="av">${initials(a.name)}</span><span><b>${ROLE_NAME[a.role]}</b><small>${esc(a.name)}</small></span></button>`).join('')}</div>
    <details class="more"><summary>Tài khoản mẫu khác (chờ duyệt, phải đổi mật khẩu…)</summary>
    <div class="acclist">${pool.map(a=>`<button type="button" data-act="fill-login" data-id="${a.id}"><span>${esc(a.name)} <span class="small muted">· ${ROLE_NAME[a.role]}</span></span>${pill(a.mustChange&&a.status==='Hoạt động'?'Đổi mật khẩu':a.status)}</button>`).join('')}</div></details>
  </div>`);
};
const _reg=VIEWS['dang-ky'];
VIEWS['dang-ky']=()=>authShell(_reg().replace(/^<div class="auth">/,'<div>').replace("head('UC01'",""));
function cvCard(c,mine){
  const sel=S.cart.includes(c.id);
  return `<article class="cv2 ${sel?'sel':''}">
    <div class="cv2-top"><span class="av lg">${c.pos}</span><div style="min-width:0"><h3>${POS[c.pos]}</h3><div class="small muted"><span class="mono">${c.code}</span> · ${c.area}</div></div>${mine?'<span class="pill p-ok">Đã mua</span>':''}</div>
    <div class="chips"><span>${c.exp?c.exp+' năm kinh nghiệm':'Chưa có kinh nghiệm'}</span><span>${c.edu}</span><span>${c.gender}, ${2026-c.birth} tuổi</span></div>
    <p class="cv2-str">${esc(c.strengths)||'Chưa cập nhật điểm mạnh'}</p>
    <div class="cv2-meta"><span class="muted small">Ngành</span> ${esc(c.industry)} <span class="dot">·</span> <span class="muted small">Lương mong muốn</span> <b class="num">${c.salary} triệu</b></div>
    <div class="cv2-foot"><button class="btn ghost sm" data-act="preview" data-id="${c.id}">Xem nhanh</button>
    ${mine?`<button class="btn sm" data-go="kh-cv">Mở CV</button>`:sel?`<button class="btn sm sel" data-act="cart-del" data-id="${c.id}">✓ Đã thêm</button>`:`<button class="btn pri sm" data-act="cart-add" data-id="${c.id}">Thêm vào giỏ</button>`}</div>
  </article>`;
}
VIEWS['kh-tim-kiem']=()=>{
  const u=S.ui; const mine=owned(S.me);
  let list=S.cvs.filter(available).filter(c=>(!u.pos||c.pos===u.pos)&&(!u.area||c.area===u.area)&&(!u.exp||c.exp>=+u.exp)&&(!u.sal||c.salary<=+u.sal)&&(!u.q||(c.code+' '+POS[c.pos]+' '+c.industry+' '+c.strengths).toLowerCase().includes(u.q.toLowerCase())));
  const n=S.cart.length, need=Math.max(0,S.cfg.minCV-n);
  return `<section class="hero">${SHOW_UC?'<span class="ucchip">UC07</span>':''}
    <h1>Tìm ứng viên <em>phù hợp</em> cho doanh nghiệp</h1>
    <p>${S.cvs.filter(available).length} hồ sơ đã được HR Light Human sàng lọc và đang sẵn sàng nhận việc · <b>${fmt(S.cfg.price)}</b>/CV</p>
    <form class="searchbar" data-form="filter">
      <label class="sb-q">${ICON.search}<input id="fq" value="${esc(u.q)}" placeholder="Tìm theo vị trí, ngành, kỹ năng hoặc mã CV" aria-label="Từ khóa"></label>
      <select id="fpos" aria-label="Vị trí">${posOpts(u.pos)}</select>
      <select id="farea" aria-label="Khu vực">${areaOpts(u.area)}</select>
      <select id="fexp" aria-label="Kinh nghiệm"><option value="">Kinh nghiệm bất kỳ</option>${[1,2,3,5].map(x=>`<option value="${x}" ${u.exp==x?'selected':''}>Từ ${x} năm</option>`).join('')}</select>
      <select id="fsal" aria-label="Lương"><option value="">Lương bất kỳ</option>${[8,10,12,15].map(x=>`<option value="${x}" ${u.sal==x?'selected':''}>Đến ${x} triệu</option>`).join('')}</select>
    </form></section>
  <div class="resbar"><span><b>${list.length}</b> hồ sơ phù hợp</span>${(u.q||u.pos||u.area||u.exp||u.sal)?`<button class="link small" data-act="clear-filter">Xóa bộ lọc</button>`:''}</div>
  ${list.length?`<div class="cvgrid2">${list.map(c=>cvCard(c,mine.has(c.id))).join('')}</div>`:`<div class="empty2">${ICON.search}<h3>Chưa có hồ sơ phù hợp</h3><p class="muted">Thử bỏ bớt điều kiện lọc hoặc tìm với từ khóa khác.</p><button class="btn" data-act="clear-filter">Xóa bộ lọc</button></div>`}
  ${n?`<div class="cartbar"><div><b>${n} CV</b> trong giỏ · <span class="num">${fmt(n*S.cfg.price)}</span>${need?`<div class="small">Thêm ${need} CV nữa để đặt mua (tối thiểu ${S.cfg.minCV} CV/đơn)</div>`:'<div class="small">Đủ điều kiện đặt mua</div>'}</div><button class="btn gold" data-go="kh-gio">Xem giỏ CV</button></div>`:''}`;
};

/* ===================== UI v3: tìm kiếm & lọc cho mọi danh sách ===================== */
const norm=s=>String(s??'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d');
function F(k){S.ui.f=S.ui.f||{};return S.ui.f[k]||(S.ui.f[k]={})}
const hit=(k,...fields)=>{const q=norm(F(k).q||'').trim();return !q||norm(fields.join(' ')).includes(q)};
const eq=(k,f,v)=>!F(k)[f]||F(k)[f]===String(v);
const opt=a=>a.map(x=>Array.isArray(x)?x:[x,x]);
const POS_O=()=>Object.entries(POS);
const sortBy=(k,list,dateFn)=>{const s=F(k).sort||'new';return [...list].sort((a,b)=>s==='new'?String(dateFn(b)).localeCompare(dateFn(a)):String(dateFn(a)).localeCompare(dateFn(b)))};
function toolbar(k,{q='Tìm kiếm…',sel=[],sort=false,n=null}){
  const f=F(k), any=f.q||sel.some(([fd])=>f[fd]);
  return `<div class="toolbar"><label class="tbq">${ICON.search}<input id="f-${k}-q" data-f="${k}.q" value="${esc(f.q||'')}" placeholder="${q}" aria-label="Tìm kiếm"></label>
  ${sel.map(([fd,label,os])=>`<select id="f-${k}-${fd}" data-f="${k}.${fd}" aria-label="${label}" class="${f[fd]?'on':''}"><option value="">${label}</option>${opt(os).map(([v,t])=>`<option value="${esc(v)}" ${String(f[fd]||'')===String(v)?'selected':''}>${esc(t)}</option>`).join('')}</select>`).join('')}
  ${sort?`<select id="f-${k}-sort" data-f="${k}.sort" aria-label="Sắp xếp"><option value="new" ${(f.sort||'new')==='new'?'selected':''}>Mới nhất</option><option value="old" ${f.sort==='old'?'selected':''}>Cũ nhất</option></select>`:''}
  <span class="tbn">${n!==null?`<b>${n}</b> kết quả`:''}${any?` · <button class="link" data-act="f-clear" data-v="${k}">Xóa lọc</button>`:''}</span></div>`;
}
const noRes=(t='Không có kết quả phù hợp',d='Thử từ khóa khác hoặc bỏ bớt bộ lọc.')=>`<div class="empty2">${ICON.search}<h3>${t}</h3><p class="muted">${d}</p></div>`;
const peopleOpts=roles=>S.accounts.filter(a=>roles.includes(a.role)).map(a=>[a.id,a.name]);
const STATUS_O=['Chờ sàng lọc','Đạt','Không đạt'];
const OTW_O=[['on','Đang bật Open to Work'],['off','Đã tắt / chờ bật']];
const otwOk=(k,c)=>!F(k).otw||(F(k).otw==='on'?c.otw&&c.status==='Đạt':!(c.otw&&c.status==='Đạt'));
const ageDays=d=>Math.max(0,Math.floor((Date.now()-Date.parse(d))/864e5));

/* ---- Khách hàng ---- */
VIEWS['kh-don-hang']=()=>{
  const k='orders'; const all=S.orders.filter(o=>o.customer===S.me);
  const os=sortBy(k,all.filter(o=>hit(k,o.id,o.items.map(i=>cvById(i.cv).code).join(' '))&&eq(k,'st',o.status)),o=>o.created);
  return head('UC10','Đơn hàng của tôi','Đơn ở trạng thái Chờ thanh toán được thanh toán trực tuyến qua cổng thanh toán.')+
  (all.length?toolbar(k,{q:'Tìm theo mã đơn hoặc mã CV',sel:[['st','Tất cả trạng thái',['Chờ thanh toán','Đã thanh toán']]],sort:true,n:os.length})+
  (os.length?`<div class="tw"><table><thead><tr><th>Mã đơn</th><th>Ngày tạo</th><th>CV trong đơn</th><th class="r">Tổng tiền</th><th>Trạng thái</th><th></th></tr></thead><tbody>
  ${os.map(o=>{const fails=S.payments.filter(p=>p.order===o.id&&p.status==='Thất bại').length;return `<tr><td class="mono">${o.id}</td><td class="num">${dshow(o.created)}</td><td class="small mono">${o.items.map(i=>cvById(i.cv).code).join(', ')}</td><td class="r num">${fmt(o.total)}</td><td>${pill(o.status)}${fails?`<div class="small muted">${fails} lần thanh toán chưa thành công</div>`:''}</td>
  <td class="r">${o.status==='Chờ thanh toán'?`<button class="btn pri sm" data-act="pay" data-id="${o.id}">${fails?'Thanh toán lại':'Thanh toán'}</button>`:`<button class="link small" data-go="kh-cv">Xem CV</button>`}</td></tr>`}).join('')}</tbody></table></div>`:noRes())
  :`<div class="empty2">${ICON.cart}<h3>Bạn chưa có đơn hàng nào</h3><p class="muted">Chọn CV phù hợp và đặt mua để bắt đầu.</p><button class="btn pri" data-go="kh-tim-kiem">Tìm CV ngay</button></div>`);
};
VIEWS['kh-cv']=()=>{
  const k='owned'; const all=S.handovers.filter(h=>h.customer===S.me);
  const hs=sortBy(k,all.filter(h=>{const c=cvById(h.cv);return hit(k,c.code,c.name,c.phone,c.email,POS[c.pos])&&eq(k,'pos',c.pos)&&eq(k,'area',c.area)&&eq(k,'order',h.order)}),h=>h.at);
  return head('UC09','CV đã mua','Thông tin đầy đủ và file CV của các ứng viên bạn đã thanh toán.')+
  (all.length?toolbar(k,{q:'Tìm theo tên, SĐT, email hoặc mã CV',sel:[['pos','Tất cả vị trí',POS_O()],['area','Tất cả khu vực',AREAS],['order','Tất cả đơn hàng',[...new Set(all.map(h=>h.order))]]],sort:true,n:hs.length})+
  (hs.length?`<div class="tw"><table><thead><tr><th>Ứng viên</th><th>Vị trí</th><th>Liên hệ</th><th>Đơn hàng</th><th>Ngày nhận</th><th></th></tr></thead><tbody>
  ${hs.map(h=>{const c=cvById(h.cv);return `<tr><td><b>${esc(c.name)}</b><div class="small muted mono">${c.code}</div></td><td>${POS[c.pos]}<div class="small muted">${c.area}</div></td><td class="small">${c.phone}<br>${esc(c.email)}</td><td class="mono small">${h.order}</td><td class="num">${dshow(h.at)}</td><td class="r"><div class="row" style="justify-content:flex-end"><button class="btn sm" data-act="full" data-id="${c.id}">Xem CV</button><button class="btn sm ghost" data-act="dl" data-id="${c.id}">Tải file</button></div></td></tr>`}).join('')}
  </tbody></table></div>`:noRes()):`<div class="empty2">${ICON.search}<h3>Chưa có CV nào</h3><p class="muted">CV sẽ xuất hiện ở đây ngay sau khi đơn hàng thanh toán thành công.</p><button class="btn pri" data-go="kh-tim-kiem">Tìm CV</button></div>`);
};

/* ---- bảng CV dùng chung (HR, CTV, Admin) ---- */
function cvList(k,base,{who=false,mine=false,actions='',q='Tìm theo mã CV, tên, SĐT hoặc email'}={}){
  const list=sortBy(k,base.filter(c=>hit(k,c.code,c.name,c.phone,c.email,c.industry)&&eq(k,'pos',c.pos)&&eq(k,'area',c.area)&&eq(k,'st',c.status)&&otwOk(k,c)&&eq(k,'src',c.source)
    &&(!F(k).mine||(F(k).mine==='src'?c.source===S.me:c.screener===S.me))),c=>c.created);
  const sel=[['pos','Tất cả vị trí',POS_O()],['area','Tất cả khu vực',AREAS],['st','Tất cả kết quả sàng lọc',STATUS_O],['otw','Open to Work',OTW_O]];
  if(who) sel.push(['src','Tất cả người nộp',peopleOpts(['hr','ctv'])]);
  if(mine) sel.push(['mine','Vai trò của tôi',[['src','Tôi tạo nguồn'],['scr','Tôi sàng lọc']]]);
  return toolbar(k,{q,sel,sort:true,n:list.length})+(list.length?`<div class="tw"><table><thead><tr><th>Ứng viên</th><th>Vị trí</th>${who?'<th>Người nộp</th>':''}<th>Ngày nộp</th><th>Sàng lọc</th><th>Open to Work</th><th class="r">Lượt bán</th><th></th></tr></thead><tbody>
  ${list.map(c=>`<tr><td><b>${esc(c.name)}</b><div class="small muted mono">${c.code}</div></td><td>${POS[c.pos]}<div class="small muted">${c.area}</div></td>${who?`<td>${esc(acc(c.source)?.name||'—')}<div class="small muted">${ROLE_NAME[acc(c.source)?.role]||''}</div></td>`:''}<td class="num">${dshow(c.created)}</td><td>${pill(c.status)}</td><td>${otwPill(c)}</td><td class="r num">${S.handovers.filter(h=>h.cv===c.id).length}</td><td class="r">${actions.replace(/\{id\}/g,c.id)}</td></tr>`).join('')}
  </tbody></table></div>`:noRes());
}
VIEWS['ctv-cv']=()=>head('','CV đã nộp','Theo dõi kết quả sàng lọc và trạng thái Open to Work của CV bạn đã nộp.')+cvList('ctvcv',S.cvs.filter(c=>c.source===S.me),{actions:'<button class="btn sm" data-act="full" data-id="{id}">Xem</button>'});
VIEWS['hr-cv']=()=>head('UC06','CV của tôi','CV bạn tạo nguồn hoặc đã sàng lọc. Có thể cập nhật Open to Work thay ứng viên sau khi đã liên hệ xác nhận.')+cvList('hrcv',S.cvs.filter(c=>c.source===S.me||c.screener===S.me),{mine:true,actions:'<button class="btn sm" data-act="hr-open" data-id="{id}">Chi tiết</button>'});
VIEWS['ad-cv']=()=>head('','Tất cả CV','Toàn bộ CV trong hệ thống, kèm thông tin đầy đủ.')+cvList('adcv',S.cvs,{who:true,actions:'<button class="btn sm" data-act="full" data-id="{id}">Xem</button>'});

/* ---- Sàng lọc CV (HR) ---- */
const CRITERIA=['Đã liên hệ được ứng viên qua điện thoại hoặc Zalo','Thông tin trên CV khớp với trao đổi thực tế','Ứng viên xác nhận vẫn đang tìm việc và đồng ý chia sẻ hồ sơ'];
const REJECT=['Kinh nghiệm chưa phù hợp với vị trí','Mức lương mong muốn chưa phù hợp','Không liên hệ được ứng viên','Thông tin CV không chính xác','Ứng viên không còn nhu cầu tìm việc','Lý do khác'];
VIEWS['hr-sang-loc']=()=>{
  const tab=S.ui.slTab||'wait';
  const wait=S.cvs.filter(c=>c.status==='Chờ sàng lọc'), done=S.cvs.filter(c=>c.status!=='Chờ sàng lọc'&&c.screener===S.me);
  const tabs=`<div class="tabs" role="tablist"><button role="tab" class="${tab==='wait'?'on':''}" aria-selected="${tab==='wait'}" data-act="sl-tab" data-v="wait">Chờ sàng lọc <span class="cnt">${wait.length}</span></button><button role="tab" class="${tab==='done'?'on':''}" aria-selected="${tab==='done'}" data-act="sl-tab" data-v="done">Tôi đã sàng lọc <span class="cnt">${done.length}</span></button></div>`;
  const hd=head('UC05','Sàng lọc CV','Xem đầy đủ hồ sơ, đánh giá theo tiêu chí và ghi nhận kết quả. CV đạt sẽ được gửi link để ứng viên bật Open to Work.');
  if(tab==='done'){
    const k='sldone';const list=sortBy(k,done.filter(c=>hit(k,c.code,c.name,c.phone,c.note)&&eq(k,'st',c.status)&&eq(k,'pos',c.pos)),c=>c.screenedAt||c.created);
    return hd+tabs+toolbar(k,{q:'Tìm theo tên, mã CV hoặc ghi chú',sel:[['st','Tất cả kết quả',['Đạt','Không đạt']],['pos','Tất cả vị trí',POS_O()]],sort:true,n:list.length})+
    (list.length?`<div class="tw"><table><thead><tr><th>Ứng viên</th><th>Vị trí</th><th>Ngày sàng lọc</th><th>Kết quả</th><th>Lý do / ghi chú</th><th>Open to Work</th><th></th></tr></thead><tbody>
    ${list.map(c=>`<tr><td><b>${esc(c.name)}</b><div class="small muted mono">${c.code}</div></td><td>${POS[c.pos]}</td><td class="num">${dshow(c.screenedAt||c.created)}</td><td>${pill(c.status)}</td><td class="small">${c.reason?`<b>${esc(c.reason)}</b><br>`:''}${esc(c.note)||'—'}</td><td>${otwPill(c)}</td><td class="r"><button class="btn sm" data-act="hr-open" data-id="${c.id}">Chi tiết</button></td></tr>`).join('')}</tbody></table></div>`:noRes());
  }
  const k='slwait';
  const list=[...wait.filter(c=>hit(k,c.code,c.name,c.phone,c.email,c.industry)&&eq(k,'pos',c.pos)&&eq(k,'area',c.area)&&(!F(k).by||acc(c.source)?.role===F(k).by))].sort((a,b)=>(F(k).sort==='new')?b.created.localeCompare(a.created):a.created.localeCompare(b.created));
  if(!wait.length) return hd+tabs+`<div class="empty2">${ICON.ok}<h3>Đã sàng lọc hết CV</h3><p class="muted">Hiện không còn CV nào chờ sàng lọc.</p></div>`;
  const selId=list.some(c=>c.id===S.ui.slSel)?S.ui.slSel:list[0]?.id; const c=selId&&cvById(selId);
  const src=c&&acc(c.source); const dup=c&&S.cvs.find(x=>x.id!==c.id&&(x.phone.replace(/\s/g,'')===c.phone.replace(/\s/g,'')||x.email.toLowerCase()===c.email.toLowerCase()));
  const f=S.ui.slForm||{};
  return hd+tabs+`<div class="toolbar"><label class="tbq">${ICON.search}<input id="f-${k}-q" data-f="${k}.q" value="${esc(F(k).q||'')}" placeholder="Tìm theo tên, SĐT, email hoặc mã CV" aria-label="Tìm kiếm"></label>
   <select id="f-${k}-pos" data-f="${k}.pos" aria-label="Vị trí"><option value="">Tất cả vị trí</option>${POS_O().map(([v,t])=>`<option value="${v}" ${F(k).pos===v?'selected':''}>${t}</option>`).join('')}</select>
   <select id="f-${k}-area" data-f="${k}.area" aria-label="Khu vực"><option value="">Tất cả khu vực</option>${AREAS.map(a=>`<option ${F(k).area===a?'selected':''}>${a}</option>`).join('')}</select>
   <select id="f-${k}-by" data-f="${k}.by" aria-label="Người nộp"><option value="">HR và CTV</option><option value="hr" ${F(k).by==='hr'?'selected':''}>Do HR tạo</option><option value="ctv" ${F(k).by==='ctv'?'selected':''}>Do CTV nộp</option></select>
   <select id="f-${k}-sort" data-f="${k}.sort" aria-label="Sắp xếp"><option value="old" ${F(k).sort!=='new'?'selected':''}>Chờ lâu nhất trước</option><option value="new" ${F(k).sort==='new'?'selected':''}>Mới nộp trước</option></select>
   <span class="tbn"><b>${list.length}</b>/${wait.length} CV</span></div>
  ${list.length?`<div class="sl"><aside class="sl-list" aria-label="CV chờ sàng lọc">${list.map(x=>{const d=ageDays(x.created);return `<button class="sl-item ${x.id===selId?'on':''}" data-act="sl-pick" data-id="${x.id}"><span class="av">${initials(x.name)}</span><span class="sl-it"><b>${esc(x.name)}</b><span class="small muted">${POS[x.pos]} · ${x.area}</span><span class="small muted">${ROLE_NAME[acc(x.source)?.role]} ${esc(acc(x.source)?.name)}</span></span><span class="wait ${d>=3?'late':''}">${d===0?'Hôm nay':d+' ngày'}</span></button>`}).join('')}</aside>
  <section class="sl-detail panel">
    <div class="sl-h"><div><div class="small muted mono">${c.code} · nộp ${dshow(c.created)} · chờ ${ageDays(c.created)} ngày</div><h2>${esc(c.name)}</h2><div class="muted">${POS[c.pos]} · ${esc(c.industry)}</div></div>${pill(c.status)}</div>
    ${dup?notice('warn','Có thể trùng ứng viên',`SĐT hoặc email trùng với hồ sơ <b>${dup.code}</b> (${esc(dup.name)}). Kiểm tra trước khi đánh giá.`):notice('ok','Không phát hiện hồ sơ trùng','Đã đối chiếu số điện thoại và email với toàn bộ CV trong hệ thống.')}
    <div class="sl-grid">
      <div><h3>Thông tin cá nhân</h3><dl class="kv2"><dt>Giới tính</dt><dd>${c.gender}</dd><dt>Năm sinh</dt><dd>${c.birth} (${2026-c.birth} tuổi)</dd><dt>Số điện thoại</dt><dd>${c.phone}</dd><dt>Email</dt><dd>${esc(c.email)}</dd><dt>Khu vực</dt><dd>${c.area}</dd></dl></div>
      <div><h3>Kinh nghiệm & mong muốn</h3><dl class="kv2"><dt>Trình độ</dt><dd>${c.edu}</dd><dt>Kinh nghiệm</dt><dd>${c.exp?c.exp+' năm':'Chưa có'} · ${esc(c.industry)}</dd><dt>Lương mong muốn</dt><dd>${c.salary} triệu</dd><dt>Hiện tại</dt><dd>${c.workStatus}</dd><dt>Có thể nhận việc</dt><dd>${c.onboard}</dd></dl></div>
      <div class="span2"><h3>Điểm mạnh</h3><p>${esc(c.strengths)||'<span class="muted">Chưa cập nhật</span>'}</p></div>
      <div class="span2"><h3>Nguồn hồ sơ</h3><p>${ROLE_NAME[src?.role]} <b>${esc(src?.name)}</b> · ${esc(src?.email)} · ${c.consent?'<span class="pill p-ok">Ứng viên đã đồng ý chia sẻ</span>':'<span class="pill p-bad">Chưa có đồng ý chia sẻ</span>'}</p></div>
    </div>
    <div class="cvfile"><div class="cvf-h"><span>📄 ${c.code}_CV.pdf</span><button class="link small" data-act="dl" data-id="${c.id}">Tải xuống</button></div>
      <div class="cvf-page"><div class="cvf-name">${esc(c.name).toUpperCase()}</div><div class="cvf-sub">${POS[c.pos]} · ${c.phone} · ${esc(c.email)}</div><div class="cvf-l"></div><div class="cvf-sec">Kinh nghiệm</div><div class="cvf-line w80"></div><div class="cvf-line w60"></div><div class="cvf-line w70"></div><div class="cvf-sec">Học vấn</div><div class="cvf-line w50"></div><div class="cvf-line w40"></div><div class="small muted center" style="margin-top:8px">Bản xem trước minh họa</div></div></div>
    <form class="stack sl-form" data-form="screen2" data-id="${c.id}">
      <h3>Đánh giá <span class="small muted" style="font-weight:400">· tiêu chí mẫu, cần xác nhận với HR</span></h3>
      <div class="crit">${CRITERIA.map((t,i)=>`<label class="check"><input type="checkbox" name="cr" value="${i}" ${f.cr?.includes(String(i))?'checked':''}><span>${t}</span></label>`).join('')}</div>
      <div class="seg2" role="radiogroup" aria-label="Kết quả"><label><input type="radio" name="res" value="Đạt" ${f.res==='Đạt'?'checked':''}><span>${ICON.ok} Đạt</span></label><label><input type="radio" name="res" value="Không đạt" ${f.res==='Không đạt'?'checked':''}><span>${ICON.err} Không đạt</span></label></div>
      <div class="field" ${f.res==='Không đạt'?'':'hidden'} id="rejWrap"><label for="slReason">Lý do không đạt</label><select id="slReason"><option value="">Chọn lý do</option>${REJECT.map(r=>`<option ${f.reason===r?'selected':''}>${r}</option>`).join('')}</select></div>
      <div class="field"><label for="slNote">Ghi chú cho hồ sơ</label><textarea id="slNote" placeholder="Nhận xét thêm về ứng viên (không bắt buộc khi Đạt)">${esc(f.note||'')}</textarea></div>
      <div id="slErr"></div>
      <div class="row"><button class="btn pri">Lưu kết quả</button><span class="small muted">CV đạt sẽ được gửi link cá nhân qua Zalo OA / Email</span></div>
    </form>
  </section></div>`:noRes()}`;
};

/* ---- Commission ---- */
function commissionView(){
  const k='com', mine=S.commissions.filter(x=>x.account===S.me);
  const months=[...new Set(mine.map(x=>x.at.slice(0,7)))].sort().reverse();
  const list=sortBy(k,mine.filter(x=>{const o=S.orders.find(o=>o.id===x.order);return hit(k,x.order,x.cv?cvById(x.cv).code:'',acc(o.customer).name)&&eq(k,'role',x.role)&&(!F(k).m||x.at.startsWith(F(k).m))}),x=>x.at);
  const sum=arr=>arr.reduce((a,b)=>a+b.amount,0);
  return head('UC11','Commission của tôi','Commission được tạo tự động ngay khi đơn hàng thanh toán thành công. Mỗi vai trò trên cùng một CV được tính riêng.')+
  `<div class="kpis"><div class="kpi"><div class="k">Tổng commission</div><div class="v price">${fmt(sum(mine))}</div><div class="s">${mine.length} khoản</div></div>
  ${['Source','Screener','Referral'].map(r=>`<div class="kpi"><div class="k">${r}</div><div class="v">${fmt(sum(mine.filter(x=>x.role===r)))}</div><div class="s">${mine.filter(x=>x.role===r).length} khoản</div></div>`).join('')}</div>`+
  (mine.length?toolbar(k,{q:'Tìm theo mã đơn, mã CV hoặc khách hàng',sel:[['role','Tất cả vai trò',[...new Set(mine.map(x=>x.role))]],['m','Tất cả các tháng',months.map(m=>[m,'Tháng '+(+m.slice(5))+'/'+m.slice(0,4)])]],sort:true,n:list.length})+
  (list.length?`<div class="tw"><table><thead><tr><th>Ngày</th><th>Đơn hàng</th><th>CV / Khách hàng</th><th>Vai trò</th><th class="r">Tỷ lệ</th><th class="r">Số tiền</th></tr></thead><tbody>
  ${list.map(x=>{const o=S.orders.find(o=>o.id===x.order);return `<tr><td class="num">${dshow(x.at)}</td><td class="mono">${x.order}</td><td>${x.cv?`<span class="mono">${cvById(x.cv).code}</span> <span class="small muted">· ${esc(acc(o.customer).name)}</span>`:esc(acc(o.customer).name)}</td><td>${pill(x.role)}</td><td class="r num">${x.rate}%</td><td class="r num">${fmt(x.amount)}</td></tr>`}).join('')}
  </tbody><tfoot><tr><td colspan="5"><b>Tổng theo bộ lọc</b></td><td class="r num"><b>${fmt(sum(list))}</b></td></tr></tfoot></table></div>`:noRes())
  :`<div class="empty2">${ICON.info}<h3>Chưa có commission</h3><p class="muted">Commission sẽ xuất hiện khi CV bạn đóng góp được bán.</p></div>`);
}
VIEWS['hr-commission']=commissionView;VIEWS['ctv-commission']=commissionView;VIEWS['ngt-commission']=commissionView;

/* ---- Người giới thiệu ---- */
const _ngt=VIEWS['ngt-link'];
VIEWS['ngt-link']=()=>{
  const html=_ngt(); const i=html.indexOf('<div class="tw">'); const me=acc(S.me);
  const k='refc', all=S.accounts.filter(a=>a.refBy===S.me);
  const rows=all.map(c=>{const first=S.orders.filter(o=>o.customer===c.id&&o.status==='Đã thanh toán').slice(-1)[0];const com=S.commissions.find(x=>x.role==='Referral'&&x.account===S.me&&S.orders.find(o=>o.id===x.order).customer===c.id);return {c,first,com}})
    .filter(r=>hit(k,r.c.name,r.c.email)&&(!F(k).buy||(F(k).buy==='y'?!!r.first:!r.first)));
  const list=sortBy(k,rows,r=>r.c.created);
  return html.slice(0,i)+`<h2 style="margin-top:6px">Khách hàng đã giới thiệu</h2>`+toolbar(k,{q:'Tìm theo tên doanh nghiệp hoặc email',sel:[['buy','Tất cả khách hàng',[['y','Đã mua'],['n','Chưa mua']]]],sort:true,n:list.length})+
  (list.length?`<div class="tw"><table><thead><tr><th>Khách hàng</th><th>Ngày đăng ký</th><th>Đơn đầu tiên</th><th class="r">Hoa hồng Referral</th></tr></thead><tbody>
  ${list.map(({c,first,com})=>`<tr><td><b>${esc(c.name)}</b><div class="small muted">${esc(c.email)}</div></td><td class="num">${dshow(c.created)}</td><td>${first?`<span class="mono">${first.id}</span> · ${dshow(first.paidAt)}`:'<span class="pill p-neutral">Chưa mua</span>'}</td><td class="r num">${com?fmt(com.amount):'—'}</td></tr>`).join('')}</tbody></table></div>`
  :all.length?noRes():`<div class="empty2">${ICON.info}<h3>Chưa có khách hàng</h3><p class="muted">Gửi link giới thiệu cho doanh nghiệp để bắt đầu.</p></div>`);
};

/* ---- Admin ---- */
const _adAcc=VIEWS['ad-tai-khoan'];
VIEWS['ad-tai-khoan']=()=>{
  const t=S.ui.tab;
  if(t==='create') return _adAcc();
  const k=t==='pending'?'accp':'acca';
  const base=S.accounts.filter(a=>a.role!=='admin'&&(t==='pending'?a.status==='Chờ duyệt':true));
  const list=sortBy(k,base.filter(a=>hit(k,a.name,a.email,a.contact||'')&&eq(k,'role',a.role)&&eq(k,'st',a.status)),a=>a.created);
  const saved=S.accounts; S.accounts=S.accounts.filter(a=>a.role==='admin'||list.includes(a)||(t==='pending'&&a.status!=='Chờ duyệt'));
  let html; try{html=_adAcc()}finally{S.accounts=saved}
  const pend=saved.filter(a=>a.status==='Chờ duyệt').length;
  html=html.replace(/Chờ duyệt \(\d+\)/,`Chờ duyệt (${pend})`);
  const tb=toolbar(k,{q:'Tìm theo tên hoặc email',sel:t==='pending'?[['role','Tất cả vai trò',[['ctv','CTV'],['ngt','Người giới thiệu']]]]:[['role','Tất cả vai trò',[['kh','Khách hàng'],['hr','HR'],['ctv','CTV'],['ngt','Người giới thiệu']]],['st','Tất cả trạng thái',['Hoạt động','Chờ duyệt','Bị khóa','Từ chối']]],sort:true,n:list.length});
  const j=html.indexOf('</div>',html.indexOf('class="tabs"'))+6;
  html=html.slice(0,j)+tb+html.slice(j);
  if(!list.length&&base.length) html=html.replace(/<div class="panel empty">Không có tài khoản chờ duyệt\.<\/div>/,noRes());
  return html;
};
const _adj=VIEWS['ad-dieu-chinh'];
VIEWS['ad-dieu-chinh']=()=>{
  const k='adj'; let html=_adj();
  const q=norm(F(k).q||'');
  const opts=S.cvs.filter(v=>!q||norm(v.code+' '+v.name+' '+v.phone).includes(q));
  if(opts.length&&!opts.some(v=>v.id===(S.ui.adjCv||S.cvs[0].id))){S.ui.adjCv=opts[0].id;html=_adj()}
  html=html.replace(/<select id="aCv" data-act="adj-cv">[\s\S]*?<\/select>/,`<select id="aCv" data-act="adj-cv">${opts.map(v=>`<option value="${v.id}" ${v.id===(S.ui.adjCv||S.cvs[0].id)?'selected':''}>${v.code} · ${esc(v.name)}</option>`).join('')||'<option value="">Không tìm thấy CV</option>'}</select>`);
  html=html.replace('<div class="field"><label for="aCv">CV</label>',`<div class="field span3"><label for="f-adj-q">Tìm CV cần điều chỉnh</label><label class="tbq solo">${ICON.search}<input id="f-adj-q" data-f="adj.q" value="${esc(F(k).q||'')}" placeholder="Nhập mã CV, tên hoặc SĐT"></label></div><div class="field"><label for="aCv">CV (${opts.length} kết quả)</label>`);
  // lọc lịch sử
  const k2='adjlog'; const logs=S.attrLog.filter(l=>hit(k2,l.code,l.old,l.neu,l.reason,l.by)&&eq(k2,'role',l.role));
  const i=html.indexOf('<h2 style="margin-bottom:8px">Lịch sử điều chỉnh</h2>');
  if(i>0){const end=html.lastIndexOf('</div>');html=html.slice(0,i)+`<h2 style="margin-bottom:8px">Lịch sử điều chỉnh</h2>`+(S.attrLog.length?toolbar(k2,{q:'Tìm theo mã CV, người, lý do',sel:[['role','Source và Screener',['Source','Screener']]],n:logs.length})+(logs.length?`<div class="tw"><table><thead><tr><th>Ngày</th><th>CV</th><th>Vai trò</th><th>Cũ</th><th>Mới</th><th>Lý do</th><th>Người sửa</th></tr></thead><tbody>${logs.map(l=>`<tr><td class="num">${dshow(l.at)}</td><td class="mono">${l.code}</td><td>${l.role}</td><td>${esc(l.old)}</td><td>${esc(l.neu)}</td><td>${esc(l.reason)}</td><td>${esc(l.by)}</td></tr>`).join('')}</tbody></table></div>`:noRes()):'<p class="small muted">Chưa có điều chỉnh nào.</p>')+'</div>';}
  return html;
};
VIEWS['ad-thong-bao']=()=>{
  const k='noti';const list=S.notis.filter(n=>hit(k,n.to,n.text)&&eq(k,'ch',n.channel)&&(!F(k).type||norm(n.text).includes(F(k).type)));
  return head('','Nhật ký thông báo','Thông báo hệ thống đã gửi qua Zalo OA / Email.')+toolbar(k,{q:'Tìm theo người nhận hoặc nội dung',sel:[['ch','Tất cả kênh',[...new Set(S.notis.map(n=>n.channel))]],['type','Tất cả loại',[['ban giao','Bàn giao CV'],['link ca nhan','Link cá nhân'],['tai khoan','Tài khoản'],['thanh toan','Thanh toán']]]],n:list.length})+
  (list.length?`<div class="tw"><table><thead><tr><th>Ngày</th><th>Người nhận</th><th>Kênh</th><th>Nội dung</th></tr></thead><tbody>${list.map(n=>`<tr><td class="num">${dshow(n.at)}</td><td>${esc(n.to)}</td><td>${n.channel}</td><td>${esc(n.text)}</td></tr>`).join('')}</tbody></table></div>`:noRes());
};
const _rep=VIEWS['ad-bao-cao'];
VIEWS['ad-bao-cao']=()=>{
  const m=F('rep').m||''; const months=[...new Set(S.orders.filter(o=>o.paidAt).map(o=>o.paidAt.slice(0,7)))].sort();
  const keep={orders:S.orders,commissions:S.commissions,handovers:S.handovers};
  if(m){S.orders=S.orders.filter(o=>!o.paidAt||o.paidAt.startsWith(m));S.commissions=S.commissions.filter(x=>x.at.startsWith(m));S.handovers=S.handovers.filter(h=>h.at.startsWith(m))}
  let html; try{html=_rep()}finally{Object.assign(S,keep)}
  const bar=`<div class="toolbar"><span class="small muted">Kỳ báo cáo</span><select id="f-rep-m" data-f="rep.m" aria-label="Kỳ báo cáo"><option value="">Toàn bộ thời gian</option>${months.map(x=>`<option value="${x}" ${m===x?'selected':''}>Tháng ${+x.slice(5)}/${x.slice(0,4)}</option>`).join('')}</select>${m?'<span class="small muted">Biểu đồ doanh thu luôn hiển thị đủ các tháng</span>':''}</div>`;
  const i=html.indexOf('<div class="kpis">'); return html.slice(0,i)+bar+html.slice(i);
};

/* ===================== UI v4: form theo bản vận hành Excel ===================== */
const WORK_O=['Đang tìm việc','Đang đi làm','Đang nghỉ việc chờ việc mới'];
const ONB_O=['Ngay','Trong 1 tuần','Trong 2 tuần','Trong 1 tháng','Trên 1 tháng'];
const EDU_O=['Đại học','Cao đẳng','Trung cấp','THPT','Sau đại học'];
const sel=(id,opts,v,ph)=>`<select id="${id}" data-k="${id}">${ph?`<option value="">${ph}</option>`:''}${opt(opts).map(([a,b])=>`<option value="${esc(a)}" ${String(v??'')===String(a)?'selected':''}>${esc(b)}</option>`).join('')}</select>`;
function cvForm(uc,title,desc){
  const me=acc(S.me);
  return head(uc,title,desc)+`<form class="panel stack form2" data-form="cv-new">
  <div class="msg msg-info"><span class="msg-ic">${ICON.info}</span><div><div class="msg-t">Bạn chỉ cần nhập thông tin cơ bản</div><div class="msg-d">Kinh nghiệm, mức lương và các thông tin khác sẽ được HR xác nhận khi liên hệ ứng viên ở bước sàng lọc.</div></div></div>
  <fieldset><legend>Người tạo nguồn</legend><div class="fgrid">
    <div class="field"><label>Bạn là</label><input value="${ROLE_NAME[S.role]}" disabled></div>
    <div class="field span2"><label>Họ và tên người tạo nguồn</label><input value="${esc(me.name)}" disabled></div></div></fieldset>
  <fieldset><legend>Ứng viên</legend><div class="fgrid">
    <div class="field span2"><label for="cName">Họ và tên ứng viên <i>*</i></label><input id="cName" required placeholder="Nguyễn Văn A"></div>
    <div class="field"><label for="cPhone">Số điện thoại <i>*</i></label><input id="cPhone" required inputmode="tel" placeholder="09xx xxx xxx"></div>
    <div class="field"><label for="cEmail">Email</label><input id="cEmail" type="email" placeholder="Để gửi thông báo cho ứng viên"></div>
    <div class="field"><label for="cZalo">Số Zalo</label><input id="cZalo" placeholder="Nếu khác số điện thoại"></div>
    <div class="field"><label for="cBirth">Năm sinh</label><input id="cBirth" type="number" min="1960" max="2008" placeholder="Nếu biết, VD: 2000"><span class="hint">Không bắt buộc. HR sẽ bổ sung khi sơ vấn.</span></div>
    <div class="field"><label for="cPos">Vị trí ứng tuyển <i>*</i></label><select id="cPos" required>${posOpts('','Chọn vị trí')}</select></div>
    <div class="field"><label for="cArea">Khu vực <i>*</i></label><select id="cArea" required>${areaOpts('','Chọn khu vực')}</select></div>
    <div class="field span2"><label for="cFile">File CV <i>*</i></label><input id="cFile" type="file" accept=".pdf,.doc,.docx" required><span class="hint">PDF hoặc Word, tối đa 5 MB. Demo không lưu file thật.</span></div>
    <div class="field span3"><label for="cMemo">Ghi chú cho HR</label><textarea id="cMemo" placeholder="Thông tin thêm về ứng viên nếu có (không bắt buộc)"></textarea></div>
  </div></fieldset>
  <label class="check consent"><input type="checkbox" id="cConsent" required><span><b>Ứng viên đã đồng ý cho CV được khai thác</b><br><span class="small muted">Ứng viên đã được thông báo và đồng ý để Light Human chia sẻ hồ sơ với doanh nghiệp tuyển dụng (Nghị định 13/2023/NĐ-CP).</span></span></label>
  <div id="cvErr"></div>
  <div class="row"><button class="btn pri">${S.role==='hr'?'Tạo CV':'Nộp CV'}</button><button type="button" class="btn ghost" data-act="cv-sample">Điền dữ liệu mẫu</button></div></form>`;
}
VIEWS['hr-tao-cv']=()=>cvForm('UC04','Tạo CV','CV mới chuyển sang trạng thái Chờ sàng lọc. Bạn được ghi nhận là người tạo nguồn (Source).');
VIEWS['ctv-nop-cv']=()=>cvForm('UC04','Nộp CV','HR sẽ liên hệ ứng viên để sàng lọc. Bạn được ghi nhận là người tạo nguồn và nhận commission khi CV được bán.');
VIEWS['hr-sang-loc']=()=>{
  const tab=S.ui.slTab||'wait';
  const wait=S.cvs.filter(c=>c.status==='Chờ sàng lọc'), done=S.cvs.filter(c=>c.status!=='Chờ sàng lọc'&&c.screener===S.me);
  const tabs=`<div class="tabs" role="tablist"><button role="tab" class="${tab==='wait'?'on':''}" aria-selected="${tab==='wait'}" data-act="sl-tab" data-v="wait">Chờ sàng lọc <span class="cnt">${wait.length}</span></button><button role="tab" class="${tab==='done'?'on':''}" aria-selected="${tab==='done'}" data-act="sl-tab" data-v="done">Tôi đã sàng lọc <span class="cnt">${done.length}</span></button></div>`;
  const hd=head('UC05','Sàng lọc CV','Liên hệ ứng viên, xác nhận thông tin vào các ô bên dưới và ghi nhận kết quả. CV đạt sẽ được gửi link để ứng viên bật Open to Work.');
  if(tab==='done'){
    const k='sldone';const list=sortBy(k,done.filter(c=>hit(k,c.code,c.name,c.phone,c.note,c.reason)&&eq(k,'st',c.status)&&eq(k,'pos',c.pos)),c=>c.screenedAt||c.created);
    return hd+tabs+toolbar(k,{q:'Tìm theo tên, mã CV hoặc ghi chú',sel:[['st','Tất cả kết quả',['Đạt','Không đạt']],['pos','Tất cả vị trí',POS_O()]],sort:true,n:list.length})+
    (list.length?`<div class="tw"><table><thead><tr><th>Ứng viên</th><th>Vị trí</th><th>Kinh nghiệm</th><th>Lương mong muốn</th><th>Ngày sàng lọc</th><th>Kết quả</th><th>Lý do / ghi chú</th><th>Open to Work</th><th></th></tr></thead><tbody>
    ${list.map(c=>`<tr><td><b>${esc(c.name)}</b><div class="small muted mono">${c.code}</div></td><td>${POS[c.pos]}<div class="small muted">${c.area}</div></td><td class="num">${c.exp!=null?c.exp+' năm':'—'}</td><td class="num">${c.salary!=null?c.salary+' triệu':'—'}</td><td class="num">${dshow(c.screenedAt||c.created)}</td><td>${pill(c.status)}</td><td class="small">${c.reason?`<b>${esc(c.reason)}</b><br>`:''}${esc(c.note)||'—'}</td><td>${otwPill(c)}</td><td class="r"><button class="btn sm" data-act="hr-open" data-id="${c.id}">Chi tiết</button></td></tr>`).join('')}</tbody></table></div>`:noRes());
  }
  const k='slwait';
  const list=wait.filter(c=>hit(k,c.code,c.name,c.phone,c.email)&&eq(k,'pos',c.pos)&&eq(k,'area',c.area)&&(!F(k).by||acc(c.source)?.role===F(k).by)).sort((a,b)=>(F(k).sort==='new')?b.created.localeCompare(a.created):a.created.localeCompare(b.created));
  if(!wait.length) return hd+tabs+`<div class="empty2">${ICON.ok}<h3>Đã sàng lọc hết CV</h3><p class="muted">Hiện không còn CV nào chờ sàng lọc.</p></div>`;
  const selId=list.some(c=>c.id===S.ui.slSel)?S.ui.slSel:list[0]?.id; const c=selId&&cvById(selId);
  if(c&&S.ui.slFormFor!==c.id){S.ui.slFormFor=c.id;S.ui.slForm={sExp:c.exp??'',sSal:c.salary??'',sGender:c.gender||'',sBirth:c.birth||'',sEdu:c.edu||'',sInd:c.industry||'',sWork:c.workStatus||'',sOnb:c.onboard||'',sStr:c.strengths||''}}
  const f=S.ui.slForm||{}; const src=c&&acc(c.source);
  const dup=c&&S.cvs.find(x=>x.id!==c.id&&(x.phone.replace(/\s/g,'')===c.phone.replace(/\s/g,'')||(c.email&&x.email.toLowerCase()===c.email.toLowerCase())));
  const tb=`<div class="toolbar"><label class="tbq">${ICON.search}<input id="f-${k}-q" data-f="${k}.q" value="${esc(F(k).q||'')}" placeholder="Tìm theo tên, SĐT, email hoặc mã CV" aria-label="Tìm kiếm"></label>
   <select id="f-${k}-pos" data-f="${k}.pos" aria-label="Vị trí"><option value="">Tất cả vị trí</option>${POS_O().map(([v,t])=>`<option value="${v}" ${F(k).pos===v?'selected':''}>${t}</option>`).join('')}</select>
   <select id="f-${k}-area" data-f="${k}.area" aria-label="Khu vực"><option value="">Tất cả khu vực</option>${AREAS.map(a=>`<option ${F(k).area===a?'selected':''}>${a}</option>`).join('')}</select>
   <select id="f-${k}-by" data-f="${k}.by" aria-label="Người nộp"><option value="">HR và CTV</option><option value="hr" ${F(k).by==='hr'?'selected':''}>Do HR tạo</option><option value="ctv" ${F(k).by==='ctv'?'selected':''}>Do CTV nộp</option></select>
   <select id="f-${k}-sort" data-f="${k}.sort" aria-label="Sắp xếp"><option value="old" ${F(k).sort!=='new'?'selected':''}>Chờ lâu nhất trước</option><option value="new" ${F(k).sort==='new'?'selected':''}>Mới nộp trước</option></select>
   <span class="tbn"><b>${list.length}</b>/${wait.length} CV</span></div>`;
  if(!list.length) return hd+tabs+tb+noRes();
  const req='<i>*</i>';
  return hd+tabs+tb+`<div class="sl"><aside class="sl-list" aria-label="CV chờ sàng lọc">${list.map(x=>{const d=ageDays(x.created);return `<button class="sl-item ${x.id===selId?'on':''}" data-act="sl-pick" data-id="${x.id}"><span class="av">${initials(x.name)}</span><span class="sl-it"><b>${esc(x.name)}</b><span class="small muted">${POS[x.pos]} · ${x.area}</span><span class="small muted">${ROLE_NAME[acc(x.source)?.role]} ${esc(acc(x.source)?.name)}</span></span><span class="wait ${d>=3?'late':''}">${d===0?'Hôm nay':d+' ngày'}</span></button>`}).join('')}</aside>
  <section class="sl-detail panel">
    <div class="sl-h"><div><div class="small muted mono">${c.code} · nộp ${dshow(c.created)} · chờ ${ageDays(c.created)} ngày</div><h2>${esc(c.name)}</h2><div class="muted">${POS[c.pos]} · ${c.area}</div></div>${pill(c.status)}</div>
    ${dup?notice('warn','Có thể trùng ứng viên',`SĐT hoặc email trùng với hồ sơ <b>${dup.code}</b> (${esc(dup.name)}). Kiểm tra trước khi đánh giá.`):notice('ok','Không phát hiện hồ sơ trùng','Đã đối chiếu số điện thoại và email với toàn bộ CV trong hệ thống.')}
    <div class="blk"><h3>Thông tin người tạo nguồn nhập</h3><dl class="kv2">
      <dt>Người tạo nguồn</dt><dd>${esc(src?.name)} <span class="small muted">(${ROLE_NAME[src?.role]})</span></dd>
      <dt>Họ và tên ứng viên</dt><dd>${esc(c.name)}</dd><dt>Năm sinh</dt><dd>${c.srcBirth?c.srcBirth:'<span class="muted">Chưa có, HR bổ sung khi sơ vấn</span>'}</dd><dt>Số điện thoại</dt><dd>${c.phone}</dd><dt>Email</dt><dd>${esc(c.email)||'—'}</dd>
      <dt>Vị trí ứng tuyển</dt><dd>${POS[c.pos]}</dd><dt>Khu vực</dt><dd>${c.area}</dd>
      <dt>File CV</dt><dd><button type="button" class="link" data-act="cv-view" data-id="${c.id}">📄 ${c.code}_CV.pdf</button></dd>
      <dt>Đồng ý khai thác</dt><dd>${c.consent?'<span class="pill p-ok">Có</span>':'<span class="pill p-bad">Chưa</span>'}</dd>
      ${c.memo?`<dt>Ghi chú</dt><dd>${esc(c.memo)}</dd>`:''}</dl></div>
    <form class="stack form2" data-form="screen2" data-id="${c.id}">
      <div class="blk"><h3>HR xác nhận sau khi liên hệ ứng viên</h3><div class="fgrid">
        <div class="field"><label for="sExp">Kinh nghiệm (năm) ${req}</label><input id="sExp" data-k="sExp" type="number" min="0" max="40" step="0.5" value="${esc(f.sExp)}" placeholder="VD: 2"></div>
        <div class="field"><label for="sSal">Mức lương mong muốn (triệu/tháng) ${req}</label><input id="sSal" data-k="sSal" type="number" min="1" max="200" value="${esc(f.sSal)}" placeholder="VD: 10"></div>
        <div class="field"><label for="sInd">Ngành / lĩnh vực đã làm ${req}</label><input id="sInd" data-k="sInd" value="${esc(f.sInd)}" placeholder="VD: Bán lẻ"></div>
        <div class="field"><label for="sGender">Giới tính ${req}</label>${sel('sGender',['Nữ','Nam'],f.sGender,'Chọn')}</div>
        <div class="field"><label for="sBirth">Năm sinh ${req}</label><input id="sBirth" data-k="sBirth" type="number" min="1960" max="2008" value="${esc(f.sBirth)}" placeholder="VD: 2000"></div>
        <div class="field"><label for="sEdu">Trình độ ${req}</label>${sel('sEdu',EDU_O,f.sEdu,'Chọn')}</div>
        <div class="field"><label for="sWork">Tình trạng hiện tại ${req}</label>${sel('sWork',WORK_O,f.sWork,'Chọn')}</div>
        <div class="field"><label for="sOnb">Có thể nhận việc ${req}</label>${sel('sOnb',ONB_O,f.sOnb,'Chọn')}</div>
        <div class="field"><label>Người sàng lọc · ngày</label><input value="${esc(acc(S.me).name)} · ${dshow(nowISO())}" disabled></div>
        <div class="field span3"><label for="sStr">Điểm mạnh nổi bật</label><textarea id="sStr" data-k="sStr" rows="2" placeholder="Hiển thị cho khách hàng ở phần xem trước">${esc(f.sStr)}</textarea></div>
      </div><p class="hint">Các thông tin có dấu * sẽ hiển thị ở phần xem trước cho khách hàng.</p></div>
      <div class="blk"><h3>Kết quả sàng lọc</h3>
      <div class="seg2" role="radiogroup" aria-label="Kết quả"><label><input type="radio" name="res" data-k="res" value="Đạt" ${f.res==='Đạt'?'checked':''}><span>${ICON.ok} Đạt</span></label><label><input type="radio" name="res" data-k="res" value="Không đạt" ${f.res==='Không đạt'?'checked':''}><span>${ICON.err} Không đạt</span></label></div>
      <div class="fgrid" style="margin-top:12px"><div class="field" ${f.res==='Không đạt'?'':'hidden'} id="rejWrap"><label for="sReason">Lý do không đạt ${req}</label>${sel('sReason',REJECT,f.sReason,'Chọn lý do')}</div>
      <div class="field span2"><label for="sNote">Ghi chú nội bộ</label><input id="sNote" data-k="sNote" value="${esc(f.sNote||'')}" placeholder="Không hiển thị cho khách hàng"></div></div></div>
      <div id="slErr"></div>
      <div class="row"><button class="btn pri">Lưu kết quả</button><span class="small muted">CV đạt sẽ được gửi link cá nhân qua Zalo OA / Email để ứng viên bật Open to Work</span></div>
    </form>
  </section></div>`;
};

/* ===================== UI v5: rà theo nguyên tắc UI chung ===================== */
function confirmBox(title,text,ok,act,id,danger){
  document.getElementById('overlay').innerHTML=`<div class="scrim center" data-act="close-scrim"><div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="mdT">
  <div class="md-ic ${danger?'bad':''}">${danger?ICON.warn:ICON.info}</div><h2 id="mdT">${title}</h2><p class="muted">${text}</p>
  <div class="row md-act"><button class="btn" data-act="close">Hủy</button><button class="btn ${danger?'dangerf':'pri'}" data-act="${act}" data-id="${id}" autofocus>${ok}</button></div></div></div>`;
  setTimeout(()=>document.querySelector('.modal [autofocus]')?.focus(),30);
}
VIEWS['kh-gio']=()=>{
  const items=S.cart.map(cvById); const n=items.length, ok=n>=S.cfg.minCV, need=S.cfg.minCV-n;
  const hd=head('UC08','Giỏ CV',`Mỗi đơn hàng cần tối thiểu ${S.cfg.minCV} CV.`);
  if(!n) return hd+`<div class="empty2">${ICON.cart}<h3>Giỏ CV đang trống</h3><p class="muted">Tìm và thêm những hồ sơ phù hợp để đặt mua.</p><button class="btn pri" data-go="kh-tim-kiem">Tìm CV</button></div>`;
  return hd+`<div class="cart2"><div class="stack">${items.map(c=>`<div class="ci"><span class="av lg">${c.pos}</span><div style="flex:1;min-width:0"><b>${POS[c.pos]}</b><div class="small muted"><span class="mono">${c.code}</span> · ${c.area} · ${c.exp} năm kinh nghiệm</div></div><span class="num">${fmt(S.cfg.price)}</span><button class="btn ghost sm" data-act="cart-del" data-id="${c.id}" aria-label="Bỏ ${c.code} khỏi giỏ">Bỏ</button></div>`).join('')}</div>
  <aside class="panel sum"><h2>Tóm tắt đơn hàng</h2><div class="sr"><span>Số CV</span><b>${n}</b></div><div class="sr"><span>Đơn giá</span><span class="num">${fmt(S.cfg.price)}</span></div><div class="sr tot"><span>Tổng cộng</span><b class="num">${fmt(n*S.cfg.price)}</b></div>
  ${ok?notice('ok','Đủ điều kiện đặt mua','Bạn sẽ thanh toán ở bước tiếp theo.'):notice('info',`Thêm ${need} CV nữa để đặt mua`,`Đơn hàng tối thiểu ${S.cfg.minCV} CV.`)}
  <button class="btn pri big" data-act="create-order" ${ok?'':'disabled aria-disabled="true"'}>Đặt mua ${n} CV</button><button class="btn ghost" data-go="kh-tim-kiem">Chọn thêm CV</button></aside></div>`;
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
    'quick-login':()=>{const a=acc(id);S.ui.login=null;setRole(a.role,a.id);toast(`Xin chào ${a.name}`)},
    'f-clear':()=>{const keep=F(v).sort;S.ui.f[v]={sort:keep};render()},
    'sl-tab':()=>{S.ui.slTab=v;render()},
    'sl-pick':()=>{S.ui.slSel=id;render()},
    'cv-view':()=>{const c=cvById(id);drawer(`<div class="drawer-h"><h2>${c.code}_CV.pdf</h2><button class="btn sm" data-act="close">Đóng</button></div><div class="cvf-page"><div class="cvf-name">${esc(c.name).toUpperCase()}</div><div class="cvf-sub">${POS[c.pos]} · ${c.phone}</div><div class="cvf-l"></div><div class="cvf-sec">Kinh nghiệm</div><div class="cvf-line w80"></div><div class="cvf-line w60"></div><div class="cvf-line w70"></div><div class="cvf-sec">Học vấn</div><div class="cvf-line w50"></div><div class="small muted center" style="margin-top:8px">Bản xem trước minh họa</div></div>`)},
    'clear-filter':()=>{Object.assign(S.ui,{q:'',pos:'',area:'',exp:'',sal:''});render()},
    'toggle-uc':()=>{SHOW_UC=!SHOW_UC;try{localStorage.setItem('cvm_show_uc',SHOW_UC?'1':'0')}catch(_){}render()},
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
    'cv-sample':()=>{const f=(i,val)=>{const el=document.getElementById(i);if(el)el.value=val};f('cName','Phan Thị Yến');f('cPhone','0987 654 321');f('cEmail','yen.pt@gmail.com');f('cPos','CS');f('cArea','TP. HCM');f('cMemo','Ứng viên từng làm tổng đài ngân hàng');f('cBirth','');document.getElementById('cConsent').checked=true;const fi=document.getElementById('cFile');if(fi)fi.required=false;toast('Đã điền dữ liệu mẫu (bỏ qua file CV trong demo)')},
    'hr-open':()=>drawer(hrDetail(cvById(id))),
    'hr-otw':()=>{const c=cvById(id);if(!document.getElementById('hrConfirm').checked){document.getElementById('hrOtwErr').innerHTML=notice('warn','Vui lòng xác nhận trước','Đánh dấu ô xác nhận đã liên hệ với ứng viên trước khi cập nhật thay.');return}
      c.otw=!c.otw;c.otwBy=acc(S.me).name+' (HR)';c.otwAt=nowISO();drawer(hrDetail(c));render();drawer(hrDetail(c));toast(`${c.code}: Open to Work ${c.otw?'đã bật':'đã tắt'}`)},
    'uv-open':()=>{window.open('u.html?t='+cvById(id).token,'_blank','noopener')},
    'com-filter':()=>{S.ui.comFilter=v;render()},
    'copy-ref':()=>{const el=document.getElementById('refLink');try{navigator.clipboard.writeText(el.value).then(()=>toast('Đã sao chép link giới thiệu'),()=>{el.select();toast('Đã chọn link, nhấn Ctrl+C để sao chép')})}catch(_){el.select();toast('Đã chọn link, nhấn Ctrl+C để sao chép')}},
    tab:()=>{S.ui.tab=v;render()},
    lock:()=>{const x=acc(id);confirmBox('Khóa tài khoản này?',`<b>${esc(x.name)}</b> sẽ không đăng nhập được cho đến khi được mở khóa. Dữ liệu và commission đã có vẫn được giữ nguyên.`,'Khóa tài khoản','lock-do',id,true)},
    'lock-do':()=>{const x=acc(id);x.status='Bị khóa';closeOverlay();render();toast(`Đã khóa tài khoản ${x.name}`)},
    'reject-do':()=>{const a=acc(id),reason=S.ui.rejReason||'';a.status='Từ chối';a.reason=reason;notify(a.name,'Email','Tài khoản bị từ chối: '+reason);closeOverlay();render();toast(`Đã từ chối đăng ký của ${a.name}`)},
    unlock:()=>{const x=acc(id);x.status='Hoạt động';render();toast(`Đã mở khóa tài khoản ${x.name}`)},
    'uv-toggle':()=>{const c=S.cvs.find(x=>x.token===S.uvToken);c.otw=!c.otw;c.otwBy='Ứng viên';c.otwAt=nowISO();render();toast(c.otw?'Đã bật Open to Work. Hồ sơ được đưa vào nguồn khả dụng.':'Đã tắt Open to Work. Hồ sơ ngừng hiển thị với doanh nghiệp mới.')}
  };
  if(A[act]){e.preventDefault();A[act]()}
});
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.closest&&t.closest('[data-form="screen2"]'))return;
  if(t.dataset&&t.dataset.f&&t.tagName==='SELECT'){const [k,fd]=t.dataset.f.split('.');F(k)[fd]=t.value;render();return}
    if(t.dataset.act==='uv-pick'){S.uvToken=t.value;history.replaceState(null,'','?t='+encodeURIComponent(t.value));render();return}
  if(t.dataset.act==='adj-cv'){S.ui.adjCv=t.value;render();return}
  if(t.closest('[data-form="filter"]')){Object.assign(S.ui,{pos:val('fpos'),area:val('farea'),exp:val('fexp'),sal:val('fsal')});render()}
});
document.addEventListener('input',e=>{const t=e.target;
  if(t.getAttribute&&t.getAttribute('aria-invalid')==='true'){t.removeAttribute('aria-invalid');const box=t.closest('form')?.querySelector('[id^="ae-"],#slErr,#cvErr,#rgErr,#gErr,#kErr,#aErr');if(box&&!t.closest('form').querySelector('[aria-invalid="true"]'))box.innerHTML=''}
  if(t.closest&&t.closest('[data-form="screen2"]')&&t.dataset.k){S.ui.slForm=S.ui.slForm||{};if(t.type!=='radio'||t.checked)S.ui.slForm[t.dataset.k]=t.value;if(t.name==='res'){document.getElementById('rejWrap').hidden=t.value!=='Không đạt'}return}
  if(t.dataset&&t.dataset.f&&t.tagName==='INPUT'){const [k,fd]=t.dataset.f.split('.');F(k)[fd]=t.value;const id=t.id;clearTimeout(window.__ft);window.__ft=setTimeout(()=>{render();const el=document.getElementById(id);if(el){el.focus();el.setSelectionRange(el.value.length,el.value.length)}},250);return}
if(e.target.id==='fq'){S.ui.q=e.target.value;clearTimeout(window.__qt);window.__qt=setTimeout(()=>{render();const el=document.getElementById('fq');el.focus();el.setSelectionRange(el.value.length,el.value.length)},250)}});
const val=id=>document.getElementById(id)?.value?.trim()??'';
const err=(box,msg)=>{document.getElementById(box).innerHTML=notice('err',msg)};
document.addEventListener('submit',e=>{
  e.preventDefault(); const f=e.target, kind=f.dataset.form, sub=e.submitter;
  if(kind==='filter')return;
  if(kind==='login'){
    const a=S.accounts.find(x=>x.email.toLowerCase()===val('lgEmail').toLowerCase());
    if(!a||!val('lgPw')){S.ui.login={email:val('lgEmail'),err:notice('err','Email hoặc mật khẩu chưa đúng','Bạn kiểm tra lại giúp nhé. Mật khẩu có phân biệt chữ hoa và chữ thường.')};render();return}
    if(!PORTAL_ROLES[PORTAL].includes(a.role)){S.ui.login={email:a.email,err:PORTAL==='admin'?notice('info','Trang này dành cho quản trị viên','Khách hàng và đối tác vui lòng đăng nhập tại <a href="index.html">trang CV Marketplace</a>.'):notice('info','Đây là tài khoản quản trị','Vui lòng đăng nhập tại <a href="admin.html">trang quản trị</a>.')};render();return}
    if(a.status!=='Hoạt động'){S.ui.login={email:a.email,err:statusMsg(a)};render();return}
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
    if(t==='kh'){Object.assign(a,{name:val('rgCompany'),contact:val('rgContact'),status:'Hoạt động',refBy:ref?.id||null});S.accounts.push(a);S.ui.regRef='';setRole('kh',a.id);toast('Chào mừng bạn đến với CV Marketplace!');return}
    Object.assign(a,{name:val('rgName'),status:'Chờ duyệt',kind:t==='ngt'?'Đối tác':undefined});S.accounts.push(a);
    f.outerHTML=`<div class="stack">${notice('ok','Đăng ký thành công!',`Cảm ơn ${esc(a.name)} đã đăng ký làm ${ROLE_NAME[t]}. Tài khoản của bạn đang chờ duyệt, chúng tôi sẽ gửi email tới <b>${esc(email)}</b> ngay khi tài khoản được kích hoạt.`)}<button class="btn" data-go="dang-nhap">Về trang đăng nhập</button></div>`;return}
  if(kind==='cv-new'){
    if(!val('cPos')||!val('cArea'))return err('cvErr','Chọn vị trí ứng tuyển và khu vực.');
    const ph=val('cPhone').replace(/\s/g,''), em=val('cEmail').toLowerCase();
    const dup=S.cvs.find(c=>c.phone.replace(/\s/g,'')===ph||(em&&c.email.toLowerCase()===em));
    if(dup)return document.getElementById('cvErr').innerHTML=notice('warn','Ứng viên này đã có trong hệ thống',`Số điện thoại hoặc email trùng với hồ sơ <b>${dup.code}</b>. Bạn không cần tạo thêm CV mới.`);
    const pos=val('cPos');const n=S.cvs.filter(c=>c.pos===pos).length+1;
    const c={id:'cv'+(seq.id++),code:pos+'-'+String(n).padStart(3,'0'),pos,name:val('cName'),birth:val('cBirth')?+val('cBirth'):null,srcBirth:val('cBirth')?+val('cBirth'):null,gender:'',area:val('cArea'),exp:null,salary:null,edu:'',strengths:'',industry:'',phone:val('cPhone'),email:val('cEmail'),zalo:val('cZalo'),memo:val('cMemo'),workStatus:'',onboard:'',source:S.me,screener:null,status:'Chờ sàng lọc',otw:false,note:'',token:'u'+Math.floor(80000+Math.random()*9999),consent:true,created:nowISO(),otwBy:null,otwAt:null};
    S.cvs.push(c);toast(`Đã ${S.role==='hr'?'tạo':'nộp'} ${c.code}, đang chờ HR sàng lọc`);go(S.role==='hr'?'hr-sang-loc':'ctv-cv');return}
  if(kind==='screen2'){
    const c=cvById(f.dataset.id), fm=S.ui.slForm||{};
    if(!fm.res)return document.getElementById('slErr').innerHTML=notice('warn','Bạn chưa chọn kết quả','Chọn Đạt hoặc Không đạt trước khi lưu.');
    if(fm.res==='Đạt'){const miss=[['sExp','Kinh nghiệm'],['sSal','Mức lương mong muốn'],['sInd','Ngành'],['sGender','Giới tính'],['sBirth','Năm sinh'],['sEdu','Trình độ'],['sWork','Tình trạng hiện tại'],['sOnb','Có thể nhận việc']].filter(([k])=>fm[k]===''||fm[k]==null).map(x=>x[1]);
      if(miss.length){[['sExp'],['sSal'],['sInd'],['sGender'],['sBirth'],['sEdu'],['sWork'],['sOnb']].forEach(([k])=>{const el=document.getElementById(k);if(el)el.setAttribute('aria-invalid',fm[k]===''||fm[k]==null?'true':'false')});document.querySelector('[aria-invalid="true"]')?.focus()}
      if(miss.length)return document.getElementById('slErr').innerHTML=notice('warn','Còn thiếu thông tin để đăng CV','Vui lòng nhập: '+miss.join(', ')+'. Các thông tin này hiển thị cho khách hàng khi xem trước.');}
    if(fm.res==='Không đạt'&&!fm.sReason)return document.getElementById('slErr').innerHTML=notice('warn','Bạn chưa chọn lý do không đạt','Chọn một lý do để HR khác có thể tra cứu sau này.');
    Object.assign(c,{exp:fm.sExp===''?null:+fm.sExp,salary:fm.sSal===''?null:+fm.sSal,industry:fm.sInd||'',gender:fm.sGender||'',birth:fm.sBirth?+fm.sBirth:null,edu:fm.sEdu||'',workStatus:fm.sWork||'',onboard:fm.sOnb||'',strengths:fm.sStr||'',
      status:fm.res,screener:S.me,screenedAt:nowISO(),note:(fm.sNote||'').trim(),reason:fm.res==='Không đạt'?fm.sReason:''});
    if(fm.res==='Đạt'){notify(c.name,'Zalo OA / Email',`Link cá nhân để bật/tắt Open to Work: https://cvmarketplace.vn/u/${c.token}`);toast(`${c.code} đạt. Đã gửi link cá nhân cho ứng viên`)}else toast(`Đã lưu kết quả không đạt cho ${c.code}`);
    S.ui.slForm={};S.ui.slFormFor=null;S.ui.slSel=null;render();return}
  if(kind==='screen'){
    const c=cvById(f.dataset.id), r=sub?.dataset.v, note=document.getElementById('sn-'+c.id).value.trim();
    if(r==='Không đạt'&&!note)return err('se-'+c.id,'Nhập ghi chú lý do không đạt.');
    c.status=r;c.screener=S.me;c.note=note;
    if(r==='Đạt'){notify(c.name,'Zalo OA / Email',`Link cá nhân để bật/tắt Open to Work: https://cvmarketplace.vn/u/${c.token}`);toast(`${c.code} Đạt. Đã gửi link cá nhân cho ứng viên qua Zalo OA / Email.`)}else toast(`${c.code} Không đạt.`);
    render();return}
  if(kind==='approve'){
    const a=acc(f.dataset.id), r=sub?.dataset.v, reason=document.getElementById('rj-'+a.id).value.trim();
    if(r==='no'&&!reason){document.getElementById('rj-'+a.id).setAttribute('aria-invalid','true');return document.getElementById('ae-'+a.id).innerHTML=notice('warn','Bạn chưa nhập lý do từ chối','Lý do sẽ được gửi kèm email cho người đăng ký.')}
    if(r==='ok'){a.status='Hoạt động';if(a.role==='ngt')a.refCode=a.name.split(' ').pop().toUpperCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/Đ/g,'D')+Math.floor(10+Math.random()*89);notify(a.name,'Email','Tài khoản đã được duyệt'+(a.refCode?`, link giới thiệu: ${a.refCode}`:''));toast(`Đã duyệt ${a.name}${a.refCode?' · tạo link giới thiệu '+a.refCode:''}`)}
    else{S.ui.rejReason=reason;return confirmBox('Từ chối đăng ký này?',`<b>${esc(a.name)}</b> sẽ nhận email thông báo kèm lý do: “${esc(reason)}”.`,'Từ chối đăng ký','reject-do',a.id,true)}
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
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeOverlay();document.querySelectorAll('details.tb-user[open]').forEach(d=>d.open=false)}});
document.addEventListener('click',e=>{document.querySelectorAll('details.tb-user[open]').forEach(d=>{if(!d.contains(e.target))d.open=false})},true);

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
