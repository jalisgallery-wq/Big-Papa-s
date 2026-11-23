/* ================= CONFIG ================= */
const WA_NUMBER = '6283872555646'; // GANTI: nomor WhatsApp tujuan (format 62xxx, tanpa + / 0 di depan)

/* Data menu — ganti foto di folder assets/ */
const MENU = [
  // ================= RAMEN =================
{ id:'kari',    cat:'ramen', rec:true,  name:'Kari Ramen',           price:20000, img:'Assets/Kari Ramen.webp',
    desc:'Kuah kari gurih dan pekat dengan rempah pilihan khas Jepang, rasa kuat yang menggugah selera.' },
  { id:'shio',    cat:'ramen', rec:true,  name:'Shio Ramen',           price:15000, img:'Assets/Shio Ramen.webp',
    desc:'Kuah kaldu katsuobushi yang umami ringan namun penuh rasa alami.' },
  { id:'miso',    cat:'ramen', rec:false, name:'Miso Kurimi Ramen',    price:20000, img:'Assets/Miso Kurimi Ramen.webp',
    desc:'Kuah miso creamy dengan cita rasa gurih yang dalam, harum dan penuh umami.' },
  { id:'vulcano', cat:'ramen', rec:false, name:'Vulcano Kurimi Ramen', price:20000, img:'Assets/Vulcano Kurimi Ramen.webp',
    desc:'Kuah creamy nano nano yang kaya rasa, dengan sensasi gurih pedas yang menggoda.' },
  { id:'paitan',  cat:'ramen', rec:false, name:'Tori Paitan Ramen',    price:25000, img:'Assets/Tori Paitan Ramen.webp',
    desc:'Kuah creamy putih dari kaldu ayam yang kaya rasa, lembut dan gurih hingga tetes terakhir.' },
  { id:'tantan',  cat:'ramen', rec:false, name:'Tantan Ramen',         price:25000, img:'Assets/Tantan Ramen.webp',
    desc:'Kuah creamy pedas beraroma wijen dan kacang, dengan sensasi gurih dan sedikit pedas yang nagih.' },
  { id:'gekikara',cat:'ramen', rec:false, name:'Gekikara Ramen',       price:25000, img:'Assets/Gekikara Ramen.webp',
    desc:'Kuah pedas nendang dengan racikan bumbu khas Jepang yang membakar lidah dan bikin ketagihan!' },
  { id:'lava',    cat:'ramen', rec:false, name:'Lava Chizu Ramen',     price:25000, img:'Assets/Chizu Hit N Hot.webp',
    desc:'Kuah pedas gurih dengan lelehan keju mozzarella yang creamy dan menggoda.' },

    // ================= DRY RAMEN =================
  { id:'dry-classic-reg',  cat:'ramen', rec:false, name:'Papas Classic Dry Ramen (Reguler)',     price:15000, img:'Assets/papas Classic Ramen.webp',
    desc:'Dry ramen asin gurih perpaduan rasa ayam dan katsuobushi. (Gratis Es Teh Tawar)' },
  { id:'dry-classic-spc',  cat:'ramen', rec:false, name:'Papas Classic Dry Ramen (Spesial)',     price:25000, img:'Assets/papas Classic Ramen.webp',
    desc:'Dry ramen asin gurih perpaduan rasa ayam dan katsuobushi porsi spesial lengkap dengan topping. (Gratis Es Teh Tawar)' },
  { id:'dry-miso-reg',     cat:'ramen', rec:false, name:'Papas Butter Miso Ramen (Reguler)',     price:20000, img:'Assets/Papas Butter Miso Ramen.webp',
    desc:'Dry ramen asin gurih dengan aroma butter miso yang khas. (Gratis Es Teh Tawar)' },
  { id:'dry-miso-spc',     cat:'ramen', rec:false, name:'Papas Butter Miso Ramen (Spesial)',     price:30000, img:'Assets/Papas Butter Miso Ramen.webp',
    desc:'Dry ramen asin gurih dengan aroma butter miso khas porsi spesial lengkap dengan topping. (Gratis Es Teh Tawar)' },
  { id:'dry-redhot-reg',   cat:'ramen', rec:false, name:'Red Hot Chilli Pepper Ramen (Reguler)', price:20000, img:'Assets/Red Hot Chilli Pepper Ramen.webp',
    desc:'Dry ramen dengan chilli oil pedas gurih berpadu sentuhan Sichuan style. (Gratis Es Teh Tawar)' },
  { id:'dry-redhot-spc',   cat:'ramen', rec:false, name:'Red Hot Chilli Pepper Ramen (Spesial)', price:30000, img:'Assets/Red Hot Chilli Pepper Ramen.webp',
    desc:'Dry ramen chilli oil pedas gurih Sichuan style porsi spesial lengkap dengan topping. (Gratis Es Teh Tawar)' },
  { id:'dry-matah-reg',    cat:'ramen', rec:false, name:'Matah Olio Ramen (Reguler)',            price:25000, img:'Assets/Matah Olio Ramen.webp',
    desc:'Dry ramen sambal matah segar dengan sentuhan bumbu aglio olio. (Gratis Es Teh Tawar)' },
  { id:'dry-matah-spc',    cat:'ramen', rec:false, name:'Matah Olio Ramen (Spesial)',            price:35000, img:'Assets/Matah Olio Ramen.webp',
    desc:'Dry ramen sambal matah segar dan aglio olio porsi spesial lengkap dengan topping. (Gratis Es Teh Tawar)' },
  { id:'dry-chizu-reg',    cat:'ramen', rec:false, name:'Chizu Hit N Hot (Reguler)',             price:25000, img:'Assets/Chizu Hit N Hot.webp',
    desc:'Dry ramen pedas gurih berbalut saus keju yang creamy dan ngeju. (Gratis Es Teh Tawar)' },
  { id:'dry-chizu-spc',    cat:'ramen', rec:false, name:'Chizu Hit N Hot (Spesial)',             price:35000, img:'Assets/Chizu Hit N Hot.webp',
    desc:'Dry ramen pedas gurih saus keju creamy porsi spesial lengkap dengan topping. (Gratis Es Teh Tawar)' },

  // ================= NASI: CHICKEN RICE BOWL =================
  { id:'nasi-tori-gyudon',      cat:'nasi', rec:false, name:'Tori Gyudon',                 price:15000, img:'Assets/Tori Gyudon.webp',
    desc:'Nasi hangat dengan potongan ayam, bawang bombay, saus gyudon gurih, taburan daun bawang, dan nori.' },
  { id:'nasi-tori-yakiniku',    cat:'nasi', rec:false, name:'Tori Yakiniku',               price:15000, img:'Assets/Tori Yakiniku.webp',
    desc:'Nasi hangat dengan potongan ayam, bawang bombay, saus yakiniku manis gurih, daun bawang, dan nori.' },
  { id:'nasi-tori-teriyaki',    cat:'nasi', rec:false, name:'Tori Teriyaki Don',           price:15000, img:'Assets/Tori Teriyaki Don.webp',
    desc:'Nasi hangat dengan potongan ayam berlapis saus teriyaki autentik, daun bawang, dan nori.' },
  { id:'nasi-tori-blackpepper', cat:'nasi', rec:false, name:'Tori Blackpepper Don',        price:15000, img:'Assets/Tori Blackpepper Don.webp',
    desc:'Nasi hangat dengan ayam tumis saus lada hitam (blackpepper), daun bawang, dan nori.' },
  { id:'nasi-oyakodon',         cat:'nasi', rec:false, name:'Oyakodon',                    price:18000, img:'Assets/Oyakodon.webp',
    desc:'Nasi hangat dengan katsu/karage, telur lembut, bawang bombay, kaldu dashi, dan kecap asin khas Jepang.' },
  { id:'nasi-sambal-bawang',    cat:'nasi', rec:false, name:'Karage/Katsu Sambal Bawang',  price:18000, img:'Assets/Karage Sambal Bawang.webp',
    desc:'Nasi dengan pilihan ayam karage atau katsu renyah, siraman sambal bawang pedas, daun bawang, dan nori.' },
  { id:'nasi-sambal-matah',     cat:'nasi', rec:false, name:'Karage/Katsu Sambal Matah',   price:18000, img:'Assets/Karage Sambal Matah.webp',
    desc:'Nasi dengan pilihan ayam karage atau katsu renyah, topping sambal matah segar, daun bawang, dan nori.' },
  { id:'nasi-katsu-curry',      cat:'nasi', rec:false, name:'Katsu Curry Don',             price:20000, img:'Assets/Katsu Curry Don.webp',
    desc:'Nasi dengan ayam katsu renyah yang disiram saus kari Jepang kental, daun bawang, dan nori.' },
  { id:'nasi-karage-saltedegg', cat:'nasi', rec:false, name:'Karage Salted Egg',           price:20000, img:'Assets/Karage Salted Egg.webp',
    desc:'Nasi dengan ayam karage renyah berbalut saus telur asin (salted egg) creamy, daun bawang, dan nori.' },
  { id:'nasi-mentai-don',       cat:'nasi', rec:false, name:'Karage/Katsu Mentai Don',     price:20000, img:'Assets/Karage Mentai Don.webp',
    desc:'Nasi dengan pilihan ayam karage atau katsu, saus mentai gurih panggang, daun bawang, dan nori.' },
  { id:'nasi-hot-lava-chizu',   cat:'nasi', rec:false, name:'Karage/Katsu Hot Lava Chizu Don', price:20000, img:'Assets/Karage Hot Lava Chizu Don.webp',
    desc:'Nasi dengan pilihan ayam karage atau katsu, perpaduan saus pedas lava dan keju (chizu), daun bawang, dan nori.' },

  // ================= NASI: EGG RICEBOWL =================
  { id:'nasi-telor-jepang',       cat:'nasi', rec:false, name:'Nasi Telor Jepang',             price:12000, img:'Assets/nasi telor jepang.webp',
    desc:'Nasi hangat dengan telur setengah matang lembut dan racikan bumbu khas Jepang.' },
  { id:'nasi-telor-jepang-dobel', cat:'nasi', rec:false, name:'Nasi Telor Jepang (Dobel)',     price:15000, img:'Assets/nasi telor jepang.webp',
    desc:'Nasi hangat dengan porsi telur ganda setengah matang lembut dan racikan bumbu khas Jepang.' },
  { id:'nasi-orak-arik',          cat:'nasi', rec:false, name:'Nasi Orak Arik Jepang',        price:15000, img:'Assets/Nasi Orak Arik Jepang.webp',
    desc:'Nasi dengan telur orak-arik gurih, potongan sosis/bakso, ayam suwir, dan sayuran.' },
  { id:'nasi-omlet-mie',          cat:'nasi', rec:false, name:'Nasi Omlet Mie Jepang',        price:15000, img:'Assets/Nasi Omlet Mie Jepang.webp',
    desc:'Nasi hangat dengan topping omlet mie, saus sambal, mayones, dan saus khas Jepang.' },
  { id:'nasi-goreng-telor',       cat:'nasi', rec:false, name:'Nasi Goreng Telor Jepang',     price:15000, img:'Assets/Nasi Goreng Telor Jepang.webp',
    desc:'Nasi goreng bumbu shoyu Jepang dengan campuran sosis/bakso, telur, dan sayuran.' },
  { id:'nasi-fuyunghai-ayam',     cat:'nasi', rec:false, name:'Ricebowl Fuyunghai (Ayam)',    price:15000, img:'Assets/Ricebowl Fuyunghai.webp',
    desc:'Nasi hangat dengan fuyunghai ayam renyah dan siraman saus asam manis spesial.' },
  { id:'nasi-fuyunghai-udang',    cat:'nasi', rec:false, name:'Ricebowl Fuyunghai (+ Udang)', price:18000, img:'Assets/Ricebowl Fuyunghai.webp',
    desc:'Nasi hangat dengan fuyunghai isian ayam dan udang, disiram saus asam manis spesial.' },

  // ================= NASI: BEEF RICE BOWL =================
  { id:'nasi-beef-gyudon',      cat:'nasi', rec:false, name:'Beef Gyudon',               price:25000, img:'Assets/Beef Gyudon.webp',
    desc:'Nasi dengan irisan daging sapi (beef), bawang bombay, saus gyudon gurih, daun bawang, dan nori.' },
  { id:'nasi-beef-yakiniku',    cat:'nasi', rec:false, name:'Beef Yakiniku Don',         price:25000, img:'Assets/Beef Yakiniku Don.webp',
    desc:'Nasi dengan irisan daging sapi yakiniku, saus yakiniku manis gurih, daun bawang, dan nori.' },
  { id:'nasi-beef-teriyaki',    cat:'nasi', rec:false, name:'Beef Teriyaki Don',         price:25000, img:'Assets/Beef Teriyaki Don.webp',
    desc:'Nasi dengan irisan daging sapi teriyaki, saus teriyaki autentik, daun bawang, dan nori.' },
  { id:'nasi-beef-blackpepper', cat:'nasi', rec:false, name:'Beef Blackpepper Don',      price:25000, img:'Assets/Beef Blackpepper Don.webp',
    desc:'Nasi dengan irisan daging sapi saus lada hitam (blackpepper), daun bawang, dan nori.' },
  { id:'nasi-beef-bulgogi',     cat:'nasi', rec:false, name:'Beef Bulgogi Don',          price:25000, img:'Assets/Beef Bulgogi Don.webp',
    desc:'Nasi dengan irisan daging sapi bulgogi berbumbu manis gurih, daun bawang, dan nori.' },
  { id:'nasi-beef-hot-rica',    cat:'nasi', rec:false, name:'Beef Hot Rica Don',         price:25000, img:'Assets/Beef Hot Rica Don.webp',
    desc:'Nasi dengan irisan daging sapi pedas saus hot rica, taburan daun bawang, dan nori.' },
  { id:'nasi-beef-patty-curry', cat:'nasi', rec:false, name:'Beef Patty Curry Don',      price:25000, img:'Assets/Beef Patty Curry Don.webp',
    desc:'Nasi dengan daging beef patty tebal berbalut saus kari Jepang kental, daun bawang, dan nori.' },
  { id:'nasi-beef-patty-mentai',cat:'nasi', rec:false, name:'Beef Patty Mentai Don',     price:25000, img:'Assets/Beef Patty Mentai Don.webp',
    desc:'Nasi dengan daging beef patty tebal, siraman saus mentai gurih, daun bawang, dan nori.' },
  { id:'nasi-beef-patty-gekikara',cat:'nasi',rec:false,name:'Beef Patty Gekikara Don',   price:25000, img:'Assets/Beef Patty Mentai Don.webp',
    desc:'Nasi dengan daging beef patty tebal dan saus pedas gekikara Jepang, daun bawang, dan nori.' },
  { id:'nasi-beef-patty-chizu', cat:'nasi', rec:false, name:'Beef Patty Lava Chizu Don', price:25000, img:'Assets/Beef Patty Lava Chizu Don.webp',
    desc:'Nasi dengan daging beef patty tebal berbalut saus keju pedas lava chizu, daun bawang, dan nori.' },

  // ================= MINUMAN & KOPI =================
  { id:'minum-luwak-panas', cat:'minum', rec:false, name:'Luwak White Coffee (Panas)', price:5000, img:'Assets/Luwak White Coffee (Panas).jpg.jpeg',
    desc:'Kopi putih instan dengan aroma harum dan rasa lembut yang pas dinikmati hangat.' },
  { id:'minum-luwak-es',    cat:'minum', rec:false, name:'Luwak White Coffee (Es)',    price:7000, img:'Assets/Luwak White Coffee (Es).jpg.jpeg',
    desc:'Kopi putih creamy disajikan dingin dengan es batu yang menyegarkan.' },
  { id:'minum-kapal-liong', cat:'minum', rec:false, name:'Kapal Api / Liong',          price:5000, img:'Assets/Kapal Api.jpg.jpeg',
    desc:'Kopi tubruk klasik dengan aroma kuat dan cita rasa kopi Nusantara yang mantap.' },
  { id:'minum-indocoffee',  cat:'minum', rec:false, name:'Indocoffee Mix',             price:4000, img:'Assets/Indocoffee Mix.jpg.jpeg',
    desc:'Perpaduan pas antara kopi, gula, dan krimer dengan rasa manis yang ringan.' },
  { id:'minum-capucino-panas', cat:'minum', rec:false, name:'Capucino (Panas)',        price:5000, img:'Assets/Luwak White Coffee (Panas).jpg.jpeg',
    desc:'Kopi cappuccino hangat dengan busa lembut dan rasa creamy yang nikmat.' },
  { id:'minum-capucino-es',    cat:'minum', rec:false, name:'Capucino (Es)',           price:8000, img:'Assets/Luwak White Coffee (Es).jpg.jpeg',
    desc:'Es cappuccino dingin yang creamy dan manis, cocok untuk menemani makan ramen.' },
  { id:'minum-kapal-black', cat:'minum', rec:false, name:'Kapal Api Black',            price:4000, img:'Assets/Kapal Api Black.jpg.jpeg',
    desc:'Kopi hitam murni tanpa ampas berlebih dengan rasa pahit khas yang membangkitkan semangat.' },
  { id:'minum-kopi-susu',   cat:'minum', rec:false, name:'Kopi Susu',                  price:7000, img:'Assets/Luwak White Coffee (Es).jpg.jpeg',
    desc:'Racikan kopi pilihan berpadu dengan susu kental manis yang gurih dan creamy.' },
  { id:'minum-goodday-friz',cat:'minum', rec:false, name:'Good Day Freeze',            price:8000, img:'Assets/Good Day Freeze.jpg.jpeg',
    desc:'Kopi dingin dengan sensasi segar dan rasa manis mocca yang nikmat.' },
  { id:'minum-robusta',     cat:'minum', rec:false, name:'Robusta Black',              price:10000, img:'Assets/Arabica Black.jpg.jpeg',
    desc:'Seduhan biji kopi Robusta pilihan dengan karakter bold, pekat, dan aroma kuat.' },
  { id:'minum-arabica',     cat:'minum', rec:false, name:'Arabica Black',              price:10000, img:'Assets/Arabica Black.jpg.jpeg',
    desc:'Seduhan biji kopi Arabica pilihan dengan cita rasa halus dan sedikit sentuhan asam segar.' },
  { id:'minum-kopi-jahe',   cat:'minum', rec:false, name:'Kopi Jahe',                  price:8000, img:'Assets/Kopi Jahe.jpg.jpeg',
    desc:'Perpaduan kopi hitam dan jahe hangat yang menenangkan tenggorokan.' },
  { id:'minum-beng2',       cat:'minum', rec:false, name:'Beng-Beng Drink',            price:8000, img:'Assets/Beng-Beng Drink.jpg.jpeg',
    desc:'Minuman cokelat karamel malt khas Beng-Beng yang manis dan creamy.' },
  { id:'minum-choco-milk',  cat:'minum', rec:false, name:'Choco Milk',                 price:10000, img:'Assets/Choco Milk.jpg.jpeg',
    desc:'Susu cokelat pekat dan lembut dengan rasa manis yang pas.' },
  { id:'minum-matcha',      cat:'minum', rec:false, name:'Matcha Latte',               price:8000, img:'Assets/Matcha Latte.jpg.jpeg',
    desc:'Perpaduan bubuk teh hijau matcha autentik dengan susu creamy yang menyegarkan.' },
  { id:'minum-air-dingin',  cat:'minum', rec:false, name:'Air Putih Dingin',           price:2000, img:'Assets/Air Putih Dingin.jpg.jpeg',
    desc:'Air mineral dingin yang segar untuk melepas dahaga.' },
  { id:'minum-teh-tawar',   cat:'minum', rec:false, name:'Es Teh Tawar',               price:2000, img:'Assets/Es Teh Tawar.jpg.jpeg',
    desc:'Seduhan teh pilihan tanpa gula disajikan dingin dengan es batu.' },
  { id:'minum-teh-panas',   cat:'minum', rec:false, name:'Teh Manis (Panas)',          price:4000, img:'Assets/Teh Manis (Panas).jpg.jpeg',
    desc:'Teh seduh hangat dengan takaran gula yang pas.' },
  { id:'minum-teh-es',      cat:'minum', rec:false, name:'Es Teh Manis',               price:5000, img:'Assets/Es Teh Tawar.jpg.jpeg',
    desc:'Teh segar dingin dengan es batu dan rasa manis yang pas.' },
  { id:'minum-teh-jahe',    cat:'minum', rec:false, name:'Teh Jahe',                   price:5000, img:'Assets/Teh Jahe.jpg.jpeg',
    desc:'Teh hangat dengan ekstrak jahe alami yang menghangatkan badan.' },
  { id:'minum-nutrisari',   cat:'minum', rec:false, name:'Nutrisari',                  price:5000, img:'Assets/Nutrisari.jpg.jpeg',
    desc:'Minuman sari buah jeruk segar dingin yang kaya vitamin C.' },
  { id:'minum-teh-tarik',   cat:'minum', rec:false, name:'Teh Tarik',                  price:8000, img:'Assets/Teh Tarik.jpg.jpeg',
    desc:'Teh susu khas yang ditarik hingga berbusa lembut dengan rasa manis gurih.' },
  { id:'minum-lemon-tea',   cat:'minum', rec:false, name:'Lemon Tea',                  price:7000, img:'Assets/Lemon Tea.jpg.jpeg',
    desc:'Perpaduan teh segar dan perasan lemon dengan rasa asam manis yang menyegarkan.' },
  { id:'minum-leci-tea',    cat:'minum', rec:false, name:'Leci Tea',                   price:8000, img:'Assets/Leci Tea.jpg.jpeg',
    desc:'Es teh manis dengan aroma dan rasa buah leci yang segar.' },
  { id:'minum-leci-milk',   cat:'minum', rec:false, name:'Leci Milk Tea',              price:10000, img:'Assets/Leci Milk Tea.jpg.jpeg',
    desc:'Perpaduan teh susu creamy dengan rasa buah leci yang manis dan segar.' },
];

/* ================= STATE ================= */
const cart = {}; // { id: qty }
const $ = (s, el=document) => el.querySelector(s);
const rp  = n => 'Rp. ' + n.toLocaleString('id-ID');
const rp2 = n => 'Rp ' + n.toLocaleString('id-ID');
const byId = id => MENU.find(m => m.id === id);
const totalQty = () => Object.values(cart).reduce((a,b)=>a+b, 0);
const totalPrice = () => Object.entries(cart).reduce((s,[id,q]) => s + byId(id).price*q, 0);

/* gambar: kalau file belum ada, tampilkan placeholder */
function imgTag(src, alt, cls=''){
  return `<img src="${src}" alt="${alt}" class="${cls}" draggable="false" onerror="this.onerror=null;this.removeAttribute('src');this.alt='';this.classList.add('img-ph')">`;
}

/* ================= RENDER MENU ================= */
function renderMenu(){
  $('#rec-list').innerHTML = MENU.filter(m=>m.rec).map(m => `
    <article class="rec-card">
      ${imgTag(m.img, m.name)}
      <h3>${m.name}</h3>
      <div class="price">${rp(m.price)}</div>
      <button class="btn-tambah" data-add="${m.id}">Tambah</button>
    </article>`).join('');

  ['ramen','nasi','minum'].forEach(cat => {
    $('#list-'+cat).innerHTML = MENU.filter(m=>m.cat===cat).map(m => `
      <article class="menu-card">
        ${imgTag(m.img, m.name)}
        <div><h3>${m.name}</h3><p>${m.desc}</p></div>
        <div class="menu-foot">
          <span class="price">${rp(m.price)}</span>
          <div class="qty-plain">
            <button data-dec="${m.id}" aria-label="Kurangi">−</button>
            <span id="q-${m.id}">${cart[m.id]||0}</span>
            <button data-inc="${m.id}" aria-label="Tambah">+</button>
          </div>
        </div>
      </article>`).join('');
  });
}

/* ================= RENDER ORDER ================= */
const ICON_TRASH = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/></svg>';
function renderOrder(){
  const ids = Object.keys(cart).filter(id => cart[id] > 0);
  $('#order-items').innerHTML = ids.length ? ids.map(id => {
    const m = byId(id), q = cart[id];
    return `
    <article class="o-row" data-id="${id}">
      ${imgTag(m.img, m.name, 'o-img')}
      <div class="o-main"><h4>${m.name}</h4><span class="o-unit">${rp(m.price)}</span></div>
      <div class="o-side">
        <strong class="o-line">${rp2(m.price * q)}</strong>
        <div class="o-step">
          <button class="o-minus" data-dec="${id}" aria-label="Kurangi">${q === 1 ? ICON_TRASH : '−'}</button>
          <span class="o-qty">${q}</span>
          <button data-inc="${id}" aria-label="Tambah">+</button>
        </div>
      </div>
    </article>`;
  }).join('') : '<div class="o-empty"><p>Belum ada pesanan.</p><button data-nav="menu">Lihat menu</button></div>';
}
/* update baris di tempat (tanpa render ulang) supaya animasinya tetap halus */
function syncOrder(id, next){
  const row = document.querySelector(`.o-row[data-id="${id}"]`);
  if (row && next > 0){
    const qEl = row.querySelector('.o-qty');
    qEl.textContent = next; pop(qEl);
    row.querySelector('.o-line').textContent = rp2(byId(id).price * next);
    row.querySelector('.o-minus').innerHTML = next === 1 ? ICON_TRASH : '−';
    return;
  }
  renderOrder();
}
function removeFromOrder(id){
  const row = document.querySelector(`.o-row[data-id="${id}"]`);
  if (row && row.classList.contains('leaving')) return;
  if (row) row.classList.add('leaving');
  setTimeout(() => change(id, -1), 260);
  snack(byId(id).name + ' dihapus', 'Urungkan', () => change(id, 1));
}

function updateTotals(){
  const q = totalQty(), t = totalPrice();
  $('#bar-count').textContent = q;
  tweenText($('#bar-total'), t, rp);
  $('#cartbar').classList.toggle('show', q > 0);
  $('#ord-count').textContent = q;
  $('#sum-count').textContent = q;
  $('#sum-total').textContent = rp2(t);
  tweenText($('#wa-total'), t, rp2);
  $('#btn-wa').disabled = q === 0;
  MENU.forEach(m => { const el = $('#q-'+m.id); if (el) el.textContent = cart[m.id]||0; });
}

/* ================= CART ACTIONS ================= */
function change(id, delta){
  const was = $('#cartbar').classList.contains('show');
  const next = Math.max(0, (cart[id]||0) + delta);
  if (next === 0) delete cart[id]; else cart[id] = next;
  updateTotals();
  pop($('#bar-count')); const q = $('#q-'+id); if (q) pop(q);
  if (was) pop($('#btn-pesan'), 'bump');
  if (totalQty()) chip((delta > 0 ? '+1 ' : '−1 ') + byId(id).name);
  if (!$('#page-order').hidden) syncOrder(id, next);
}
function pop(el, cls='pop'){ if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
function chip(text){
  const el = $('#cart-chip'); el.textContent = text; el.classList.add('show');
  clearTimeout(chip._t); chip._t = setTimeout(() => el.classList.remove('show'), 1400);
}
/* angka total naik/turun halus */
function tweenText(el, to, fmt){
  const from = el._v ?? 0; el._v = to;
  cancelAnimationFrame(el._r);
  if (from === to || matchMedia('(prefers-reduced-motion:reduce)').matches){ el.textContent = fmt(to); return; }
  const t0 = performance.now();
  const step = now => {
    const k = Math.min((now - t0) / 350, 1), e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(k < 1 ? Math.round((from + (to - from) * e) / 500) * 500 : to);
    if (k < 1) el._r = requestAnimationFrame(step);
  };
  el._r = requestAnimationFrame(step);
}

document.addEventListener('click', e => {
  if (e.target.closest('[data-nav]')) return goMenu();
  const t = e.target.closest('[data-add],[data-inc],[data-dec]');
  if (!t) return;
  if (t.dataset.add){
    change(t.dataset.add, 1);
    t.classList.add('added'); t.textContent = 'Ditambah ✓';
    clearTimeout(t._t); t._t = setTimeout(() => { t.classList.remove('added'); t.textContent = 'Tambah'; }, 900);
  }
  if (t.dataset.inc) change(t.dataset.inc, 1);
  if (t.dataset.dec){
    if (!$('#page-order').hidden && cart[t.dataset.dec] === 1) return removeFromOrder(t.dataset.dec);
    change(t.dataset.dec, -1);
  }
});

/* ================= NAVIGASI HALAMAN ================= */
function show(page){
  $('#page-menu').hidden  = page !== 'menu';
  $('#page-order').hidden = page !== 'order';
  if (page === 'order') renderOrder();
  window.scrollTo({top:0});
  if (page === 'menu'){ curTab = ''; requestAnimationFrame(() => { updateTabs(); window.layoutPromo && window.layoutPromo(); }); }
}
/* back: pakai history, jadi tombol back HP / browser juga berfungsi */
function openOrder(){ history.pushState({p:'order'}, ''); show('order'); }
function goMenu(){ if (history.state && history.state.p === 'order') history.back(); else show('menu'); }
window.addEventListener('popstate', () => show(history.state && history.state.p === 'order' ? 'order' : 'menu'));
if (history.state && history.state.p) history.replaceState(null, '');
$('#btn-pesan').addEventListener('click', () => { if (totalQty()) openOrder(); });
$('#btn-tambah-menu').addEventListener('click', goMenu);
$('#btn-back').addEventListener('click', goMenu);
$('#logo').addEventListener('click', goMenu);
$('#logo').style.cursor = 'pointer';

/* tab scroll + highlight */
function scrollToSection(id){
  const el = document.getElementById(id); if (!el) return;
  const off = (matchMedia('(min-width:900px)').matches ? 72 : 64) + $('.tabs').offsetHeight + 12;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - off, behavior: 'smooth' });
}
$('.tabs').addEventListener('click', e => {
  const a = e.target.closest('a[data-target]');
  if (!a) return;
  e.preventDefault();
  lockTab(); setTab(a.dataset.target);
  scrollToSection(a.dataset.target);
});
const secs = ['sec-ramen','sec-nasi','sec-minum'];
const tabEls = [...document.querySelectorAll('.tabs a')], ind = $('.tab-ind');
let curTab = '';
let tabLocked = false, lockT = 0;
function lockTab(){ tabLocked = true; clearTimeout(lockT); lockT = setTimeout(() => tabLocked = false, 1200); }
function setTab(id){
  if (id === curTab) return;
  curTab = id;
  tabEls.forEach(a => {
    const on = a.dataset.target === id;
    a.classList.toggle('active', on);
    if (on){ ind.style.width = a.offsetWidth + 'px'; ind.style.transform = `translateX(${a.offsetLeft}px)`; }
  });
}
function updateTabs(){
  if ($('#page-menu').hidden) return;
  if (tabLocked){ clearTimeout(lockT); lockT = setTimeout(() => tabLocked = false, 200); return; }
  const line = $('.tabs').getBoundingClientRect().bottom + 90;
  let cur = secs[0];
  secs.forEach(id => { if (document.getElementById(id).getBoundingClientRect().top < line) cur = id; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = secs[secs.length - 1];
  setTab(cur);
}
window.addEventListener('scroll', updateTabs, {passive:true});
window.addEventListener('resize', () => { curTab = ''; updateTabs(); });
if (document.fonts) document.fonts.ready.then(() => { curTab = ''; updateTabs(); });

/* ================= WHATSAPP ================= */
$('#btn-wa').addEventListener('click', () => {
  const nama = $('#nama').value.trim();
  if (!totalQty()) return toast('Pesanan masih kosong');
  if (!nama){
    const fl = $('#fl-nama');
    fl.classList.remove('shake'); void fl.offsetWidth; fl.classList.add('error', 'shake');
    fl.scrollIntoView({behavior:'smooth', block:'center'});
    $('#nama').focus({preventScroll:true});
    return;
  }
  const catatan = $('#catatan').value.trim();
  const lines = Object.entries(cart).map(([id,q]) => `- ${byId(id).name} x${q} = ${rp2(byId(id).price*q)}`);
  const msg = [
    `Halo Beh!, saya mau pesan:`, '',
    `Nama: ${nama}`, '', ...lines, '',
    `Total (${totalQty()} item): ${rp2(totalPrice())}`,
    catatan ? `\nCatatan: ${catatan}` : ''
  ].join('\n');
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

/* ================= FORM: chips catatan, autogrow, undo ================= */
const noteEl = $('#catatan'), chipEls = [...document.querySelectorAll('.chip')];
const grow = () => { noteEl.style.height = 'auto'; noteEl.style.height = noteEl.scrollHeight + 'px'; };
const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function syncChips(){ chipEls.forEach(c => c.classList.toggle('on', noteEl.value.toLowerCase().includes(c.dataset.t.toLowerCase()))); }
chipEls.forEach(c => c.addEventListener('click', () => {
  const t = c.dataset.t;
  if (c.classList.contains('on')) noteEl.value = noteEl.value.replace(new RegExp('(,\\s*)?' + esc(t), 'i'), '').replace(/^[,\s]+/, '').trim();
  else noteEl.value = noteEl.value.trim() ? noteEl.value.trim().replace(/,$/, '') + ', ' + t : t;
  syncChips(); grow();
}));
noteEl.addEventListener('input', () => { syncChips(); grow(); });
$('#nama').addEventListener('input', () => $('#fl-nama').classList.remove('error'));

function snack(text, label, fn){
  let el = $('.snack');
  if (!el){ el = document.createElement('div'); el.className = 'snack'; el.innerHTML = '<span></span><button class="snack-btn"></button>'; document.body.appendChild(el); }
  el.firstChild.textContent = text;
  const b = el.lastChild; b.textContent = label;
  b.onclick = () => { fn(); el.classList.remove('show'); };
  el.classList.add('show');
  clearTimeout(snack._t); snack._t = setTimeout(() => el.classList.remove('show'), 4000);
}

/* ================= UTIL ================= */
function toast(text){
  let el = $('.toast');
  if (!el){ el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); }
  el.textContent = text; el.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => el.classList.remove('show'), 1800);
}
/* logo placeholder kalau assets/logo.png belum ada */
$('#logo').addEventListener('error', function(){ this.removeAttribute('src'); this.classList.add('ph'); });

/* ================= HEADER MENGECIL SAAT SCROLL (dengan inertia) ================= */
const rootEl = document.documentElement, topbar = $('#topbar');
const reduceMotion = matchMedia('(prefers-reduced-motion:reduce)').matches;
const targetP = () => Math.min(Math.max(window.scrollY / (matchMedia('(min-width:900px)').matches ? 98 : 86), 0), 1);
let pCur = targetP(), hRaf = 0;
function headerTick(){
  hRaf = 0;
  const t = targetP();
  pCur = reduceMotion ? t : pCur + (t - pCur) * .22;
  if (Math.abs(t - pCur) < .002) pCur = t;
  rootEl.style.setProperty('--p', pCur.toFixed(3));
  topbar.toggleAttribute('data-compact', pCur > .5);
  if (pCur !== t) hRaf = requestAnimationFrame(headerTick);
}
function updateHeader(){ if (!hRaf) hRaf = requestAnimationFrame(headerTick); }
window.addEventListener('scroll', updateHeader, {passive:true});
window.addEventListener('resize', updateHeader);

/* ===== logo: potong otomatis area transparan di pinggir (biar mentok kiri) =====
   Butuh dibuka lewat server (Live Server / hosting). Kalau lewat file:// otomatis dilewati. */
function trimLogo(img){
  const run = () => {
    try {
      if (img.dataset.trimmed) return;
      const w = img.naturalWidth, h = img.naturalHeight; if (!w) return;
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      const ctx = c.getContext('2d'); ctx.drawImage(img, 0, 0);
      const d = ctx.getImageData(0, 0, w, h).data;
      let t = h, l = w, r = -1, b = -1;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (d[(y*w + x)*4 + 3] > 10){
        if (x < l) l = x; if (x > r) r = x; if (y < t) t = y; if (y > b) b = y;
      }
      if (r < l || b < t) return;
      const cw = r - l + 1, ch = b - t + 1, c2 = document.createElement('canvas');
      c2.width = cw; c2.height = ch;
      c2.getContext('2d').drawImage(c, l, t, cw, ch, 0, 0, cw, ch);
      img.dataset.trimmed = 1; img.src = c2.toDataURL();
    } catch (e) { /* canvas diblokir (file://) — abaikan */ }
  };
  if (img.complete && img.naturalWidth) run(); else img.addEventListener('load', run, {once:true});
}
trimLogo($('#logo'));

/* ================= CAROUSEL PROMO ================= */
const PROMOS = [
  { tag:'Menu Baru', title:'Kari Ramen Hokkaido', sub:'Kuah kari kental, kaya rempah. Hangat sampai tetes terakhir.', img:'Assets/Kari Ramen.webp', c1:'#b91c1c', c2:'#6f0f0f', target:'sec-ramen' },
  { tag:'Favorit',   title:'Shio Ramen Ringan & Gurih', sub:'Kuah kaldu garam yang bening dan menyegarkan.', img:'Assets/Shio Ramen.webp', c1:'#0b5d3b', c2:'#073b26', target:'sec-ramen' },
  { tag:'Hemat',     title:'Paket Nasi + Minum', sub:'Kenyang tanpa bikin dompet tipis.', img:'Assets/Nasi Goreng Telor Jepang.webp', c1:'#d9631e', c2:'#9a3d0a', target:'sec-nasi' },
];

function initPromo(){
  const root = $('#promo'), track = $('#promo-track'), dotsEl = $('#promo-dots');
  const N = PROMOS.length;
  const slideHTML = (p, clone) => `
    <article class="slide" style="--c1:${p.c1};--c2:${p.c2}"${clone ? ' aria-hidden="true"' : ''}>
      ${imgTag(p.img, p.title, 'slide-img')}
      <div class="slide-txt">
        <span class="slide-tag">${p.tag}</span>
        <h3>${p.title}</h3><p>${p.sub}</p>
        <button class="slide-cta" data-goto="${p.target}"${clone ? ' tabindex="-1"' : ''}>Pesan sekarang</button>
      </div>
    </article>`;
  // 3 set slide: [klon][asli][klon]. Saat diam, posisi selalu di-set asli (teleport tak terlihat)
  track.innerHTML = [true, false, true].map(c => PROMOS.map(p => slideHTML(p, c)).join('')).join('');
  dotsEl.innerHTML = PROMOS.map((_, i) => `<button class="dot" aria-label="Slide ${i+1}"><span class="fill"></span></button>`).join('');
  const slides = [...track.children], dots = [...dotsEl.children];
  let idx = N, active = -1, raf = 0, settle = 0, touching = false, dragging = false, moved = 0;

  const center = i => slides[i].offsetLeft + slides[i].offsetWidth / 2 - track.clientWidth / 2;
  function setActive(i){
    active = i;
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
    const f = dots[i].firstElementChild;
    f.classList.remove('on'); void f.offsetWidth; f.classList.add('on'); // restart progress
  }
  function layout(){
    raf = 0;
    if (!track.clientWidth) return;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = 1e9;
    slides.forEach((s, i) => {
      const d = (s.offsetLeft + s.offsetWidth / 2 - mid) / s.offsetWidth;
      const a = Math.min(Math.abs(d), 1);
      s.style.transform = `scale(${1 - a * .09})`;
      s.style.opacity = 1 - a * .5;
      s.style.setProperty('--px', (d * -36).toFixed(1) + 'px'); // parallax
      if (Math.abs(d) < bd){ bd = Math.abs(d); best = i; }
    });
    idx = best;
    if (best % N !== active) setActive(best % N);
  }
  const jump = i => { track.scrollLeft = center(i); layout(); };           // pindah instan (tak terlihat, slide klon = identik)
  const go = i => track.scrollTo({ left: center(Math.max(0, Math.min(3*N - 1, i))), behavior:'smooth' });
  const normalize = () => {
    if (touching || dragging) return;
    if (idx < N) jump(idx + N); else if (idx >= 2*N) jump(idx - N);
  };
  window.layoutPromo = () => { active = -1; jump(idx); normalize(); };

  track.addEventListener('scroll', () => {
    if (!raf) raf = requestAnimationFrame(layout);
    clearTimeout(settle); settle = setTimeout(normalize, 140);
  }, {passive:true});
  window.addEventListener('resize', () => jump(idx));

  dots.forEach((d, k) => d.addEventListener('click', () => {
    let best = k, bd = 1e9;                                                 // pilih slide terdekat dgn nomor itu (bisa lompat maju/mundur)
    for (let m = 0; m < 3; m++){ const c = k + N*m, dd = Math.abs(c - idx); if (dd < bd){ bd = dd; best = c; } }
    go(best);
  }));
  $('#promo-prev').addEventListener('click', () => go(idx - 1));
  $('#promo-next').addEventListener('click', () => go(idx + 1));
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') go(idx - 1);
    if (e.key === 'ArrowRight') go(idx + 1);
  });
  dotsEl.addEventListener('animationend', () => go(idx + 1));               // autoplay: terus maju, tanpa ujung

  // pause saat disentuh / hover / tab tidak aktif
  const pause = v => root.classList.toggle('paused', v);
  root.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') pause(true); });
  root.addEventListener('pointerleave', () => pause(false));
  const tStart = () => { touching = true; pause(true); };
  const tEnd = () => { touching = false; pause(false); clearTimeout(settle); settle = setTimeout(normalize, 200); };
  root.addEventListener('touchstart', tStart, {passive:true});
  root.addEventListener('touchend', tEnd);
  root.addEventListener('touchcancel', tEnd);
  document.addEventListener('visibilitychange', () => pause(document.hidden));

  // drag pakai mouse (desktop)
  let sx = 0, sl = 0;
  track.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse') return;
    dragging = true; moved = 0; sx = e.clientX; sl = track.scrollLeft;
    track.classList.add('drag'); track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove', e => {
    if (!dragging) return;
    moved = Math.abs(e.clientX - sx);
    track.scrollLeft = sl - (e.clientX - sx);
  });
  const end = () => { if (!dragging) return; dragging = false; track.classList.remove('drag'); go(idx); };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  track.addEventListener('click', e => { if (moved > 5){ e.preventDefault(); e.stopPropagation(); moved = 0; } }, true);

  // tombol CTA di slide
  track.addEventListener('click', e => {
    const b = e.target.closest('[data-goto]');
    if (b) scrollToSection(b.dataset.goto);
  });
  jump(N);
}

/* ================= SCROLLBAR FLOATING ================= */
(function(){
  const sb = document.createElement('div');
  sb.className = 'sb';
  sb.innerHTML = '<div class="sb-ticks"></div><div class="sb-thumb"><i class="sb-grip"></i><span class="sb-tip"></span></div>';
  document.body.appendChild(sb);
  const ticksEl = sb.firstChild, thumb = sb.lastChild, tip = thumb.lastChild, doc = document.documentElement;
  let hideT = 0, dragging = false, sy = 0, ss = 0, range = 1, tH = 48, prog = 0;

  function update(){
    const vh = window.innerHeight, dh = doc.scrollHeight;
    if (dh <= vh + 4){ sb.classList.remove('show'); return false; }
    const trackH = sb.clientHeight;
    tH = Math.max(48, trackH * vh / dh);
    range = Math.max(1, trackH - tH);
    prog = Math.min(1, Math.max(0, window.scrollY / (dh - vh)));
    thumb.style.height = tH + 'px';
    thumb.style.transform = `translateY(${(prog * range).toFixed(1)}px)`;
    return true;
  }
  const hideLater = () => { clearTimeout(hideT); if (!dragging) hideT = setTimeout(() => sb.classList.remove('show'), 1400); };
  function wake(){ if (!update()) return; sb.classList.add('show'); hideLater(); }

  // penanda posisi tiap section di jalur (hanya halaman menu, tampil saat drag)
  function buildTicks(){
    ticksEl.innerHTML = '';
    if ($('#page-menu').hidden) return;
    const dh = doc.scrollHeight, vh = window.innerHeight;
    secs.forEach(id => {
      const y = document.getElementById(id).getBoundingClientRect().top + window.scrollY - 136;
      const p = Math.min(1, Math.max(0, y / (dh - vh)));
      const d = document.createElement('i'); d.style.top = (p * range + tH / 2) + 'px';
      ticksEl.appendChild(d);
    });
  }
  function label(){ // nama section (menu) atau persen (halaman lain)
    const a = !$('#page-menu').hidden && tabEls.find(t => t.dataset.target === curTab);
    tip.textContent = a ? a.textContent : Math.round(prog * 100) + '%';
  }
  window.addEventListener('scroll', () => { wake(); if (dragging) label(); }, {passive:true});
  window.addEventListener('resize', wake);
  new ResizeObserver(wake).observe(doc);

  thumb.addEventListener('pointerenter', () => clearTimeout(hideT));
  thumb.addEventListener('pointerleave', hideLater);
  thumb.addEventListener('pointerdown', e => {
    dragging = true; sy = e.clientY; ss = window.scrollY;
    thumb.setPointerCapture(e.pointerId);
    update(); buildTicks(); label();
    sb.classList.add('drag', 'show'); clearTimeout(hideT);
    e.preventDefault();
  });
  thumb.addEventListener('pointermove', e => {
    if (!dragging) return;
    window.scrollTo(0, ss + (e.clientY - sy) * (doc.scrollHeight - window.innerHeight) / range);
  });
  const end = () => { if (!dragging) return; dragging = false; sb.classList.remove('drag'); wake(); };
  thumb.addEventListener('pointerup', end);
  thumb.addEventListener('pointercancel', end);
})();

/* ================= INIT ================= */
renderMenu();
updateTotals();
initPromo();
updateHeader();
updateTabs();
