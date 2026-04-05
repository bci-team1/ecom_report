/* ===== DATA ===== */
const CAT = {
  but_viet: {
    n: 'Bút Viết', i: '🖊️',
    sc: [{ k: 'all', n: 'Tất cả', i: '📊' }, { k: 'but_bi', n: 'Bút Bi', i: '🖊️' }, { k: 'but_gel', n: 'Bút Gel', i: '✒️' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '108.8', u: 'Tỷ', g: '+37%', sub: 'vs 79.5 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '3.4', u: 'Triệu', g: '-46%', sub: 'vs 6.3 triệu in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '40.3%', u: '', g: '+11pp', sub: 'vs 29.5% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '5.8', u: 'Nghìn', g: '-9%', sub: 'vs 6.4 nghìn in Q1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '108.8', u: 'Tỷ', g: '+37%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~7.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '40.3%', u: '', g: '+11pp', sub: 'vs 29.5% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (21%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 63.4, pre: 52.8, c: '#f97316' }, { n: 'TikTok Shop', cur: 43.8, pre: 23.4, c: '#0f172a' }, { n: 'Lazada', cur: 1.5, pre: 3.1, c: '#3b82f6' }, { n: 'Tiki', cur: 0.019, pre: 0.085, c: '#1a94ff' }],
    brand: [{ n: 'Thiên Long', cur: 21, pre: 15, c: '#1a56db' }, { n: 'Deli', cur: 10, pre: 10, c: '#ef4444' }, { n: 'G-Star', cur: 2, pre: 2, c: '#10b981' }, { n: 'Bossee', cur: 2, pre: 2, c: '#f97316' }, { n: 'Classmate', cur: 1, pre: 2, c: '#8b5cf6' }, { n: 'Others', cur: 64, pre: 69, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 5.37, l: 0, t: 0 }, { r: '10K-30K', s: 26.88, l: 0, t: 0 }, { r: '30K-50K', s: 24.74, l: 0, t: 0 }, { r: '50K-75K', s: 18.40, l: 0, t: 0 }, { r: '75K-100K', s: 17.24, l: 0, t: 0 }, { r: '100K-150K', s: 5.88, l: 0, t: 0 }, { r: '150K-200K', s: 2.72, l: 0, t: 0 }, { r: '200K-350K', s: 2.84, l: 0, t: 0 }, { r: '350K-500K', s: 1.88, l: 0, t: 0 }],
    prod: [
      { n: 'Combo 5 10 20 Bút gel Fasgel GEL-068', sc: 'but_gel', br: 'Thien Long', ch: 'tiktok', pr: '27K', fm: 'Combo 20', rv: '1.3 Tỷ', g: '+57%', us: '42.9K', ug: '+52%', tr: '2.2 Tỷ', tu: '71.7K', re: '5,334', url: 'https://www.tiktok.com/view/product/1732616810831906809' },
      { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', sc: 'but_bi', br: 'Thien Long', ch: 'tiktok', pr: '36K', fm: 'Combo 20', rv: '1.2 Tỷ', g: '-43%', us: '28.9K', ug: '-58%', tr: '4.7 Tỷ', tu: '161.8K', re: '12,918', url: 'https://www.tiktok.com/view/product/1729758198371814393' },
      { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực thân bút pastel', sc: 'but_bi', br: 'Thien Long', ch: 'shopee', pr: '30.5K', fm: 'Combo 20', rv: '899.5 Tr', g: '-2%', us: '29.7K', ug: '-19%', tr: '4.1 Tỷ', tu: '156.2K', re: '31,340', url: 'https://shopee.vn/product/101480242/21193760161' },
      { n: '10 bút tặng 20 ruột-COMBO bút gel xóa được', sc: 'but_gel', br: 'Thien Long', ch: 'tiktok', pr: '86K', fm: 'Combo 10', rv: '834.8 Tr', g: '-54%', us: '9.4K', ug: '-55%', tr: '2.9 Tỷ', tu: '33.2K', re: '2,212', url: 'https://www.tiktok.com/view/product/1732466130837866215' },
      { n: 'Combo 5 10 20 Bút bi dầu màu pastel Deli EQ32', sc: 'but_bi', br: 'Deli', ch: 'tiktok', pr: '30K', fm: 'Combo 20', rv: '815.2 Tr', g: '', us: '23.9K', ug: '', tr: '931.1 Tr', tu: '27.8K', re: '1,035', url: 'https://www.tiktok.com/view/product/1733976532781139583' },
      { n: 'Combo 5 10 20 Bút Gel Xóa được Thiên Long TP-GELE01', sc: 'but_gel', br: 'Thien Long', ch: 'shopee', pr: '58K', fm: 'Combo 20', rv: '727.0 Tr', g: '+29%', us: '12.7K', ug: '+17%', tr: '3.1 Tỷ', tu: '62.5K', re: '13,427', url: 'https://shopee.vn/product/101480242/19292039434' },
      { n: 'NÂNG CẤP 2026 Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'shopee', pr: '9K', fm: 'Single', rv: '628.0 Tr', g: '-26%', us: '67.6K', ug: '-26%', tr: '6.0 Tỷ', tu: '1.9 Tr', re: '121,481', url: 'https://shopee.vn/product/127805122/18109428728' },
      { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen thân bút pastel', sc: 'but_bi', br: 'Thien Long', ch: 'tiktok', pr: '110K', fm: 'Combo 20', rv: '603.8 Tr', g: '-19%', us: '5.6K', ug: '-30%', tr: '2.6 Tỷ', tu: '27.4K', re: '3,287', url: 'https://www.tiktok.com/view/product/1729758201010228217' },
      { n: 'Combo 5 10 20 Bút gel Thiên Long Happ Obby GEL-056', sc: 'but_gel', br: 'Thien Long', ch: 'tiktok', pr: '44K', fm: 'Combo 10', rv: '571.4 Tr', g: '+126%', us: '12.7K', ug: '+119%', tr: '834.5 Tr', tu: '18.7K', re: '893', url: 'https://www.tiktok.com/view/product/1732234716280294393' },
      { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', sc: 'but_bi', br: 'Thien Long', ch: 'tiktok', pr: '26.25K', fm: 'Combo 5', rv: '554.9 Tr', g: '-32%', us: '19.5K', ug: '-44%', tr: '2.3 Tỷ', tu: '97.1K', re: '19,347', url: 'https://shopee.vn/product/368671137/23577091247' }
    ],
    sdata: {
      but_bi: {
        kpi: [{ l: 'Gross Sales (VND)', v: '27.7', u: 'Tỷ', g: '+34%', sub: 'vs 20.6 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '816.5', u: 'Nghìn', g: '-37%', sub: 'vs 1.3 triệu in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '41.2%', u: '', g: '+19pp', sub: 'vs 21.9% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '3.4', u: 'Nghìn', g: '-11%', sub: 'vs 3.8 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '27.7', u: 'Tỷ', g: '+34%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~21.6%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '41.2%', u: '', g: '+19pp', sub: 'vs 21.9% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (40%)', u: '', g: '', sub: '7/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 15.7, pre: 15.1, c: '#f97316' }, { n: 'TikTok Shop', cur: 11.4, pre: 4.5, c: '#0f172a' }, { n: 'Lazada', cur: 0.581, pre: 0.908, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0083, pre: 0.033, c: '#1a94ff' }],
        brand: [{ n: 'Thiên Long', cur: 40.4, pre: 30.5, c: '#1a56db' }, { n: 'Deli', cur: 6.9, pre: 6.1, c: '#ef4444' }, { n: 'G-Star', cur: 4.3, pre: 2.8, c: '#10b981' }, { n: 'Vâng Thiên', cur: 2.1, pre: 1.7, c: '#f97316' }, { n: 'Flexoffice', cur: 1.5, pre: 1.1, c: '#8b5cf6' }, { n: 'Others', cur: 44.8, pre: 57.8, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.90, l: 0, t: 0 }, { r: '10K-30K', s: 7.11, l: 0, t: 0 }, { r: '30K-50K', s: 7.01, l: 0, t: 0 }, { r: '50K-75K', s: 3.89, l: 0, t: 0 }, { r: '75K-100K', s: 4.56, l: 0, t: 0 }, { r: '100K-150K', s: 2.18, l: 0, t: 0 }, { r: '150K-200K', s: 0.60, l: 0, t: 0 }, { r: '200K-350K', s: 0.45, l: 0, t: 0 }, { r: '350K-500K', s: 0.20, l: 0, t: 0 }, { r: '500K-750K', s: 0.28, l: 0, t: 0 }, { r: '750K-1M', s: 0.31, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 5 10 20 Bút bi màu pastel PRO 027 Thiên Long TL-105', sc: 'but_bi', br: 'Thien Long', ch: 'tiktok', pr: '36K', fm: 'Combo 20', rv: '1.19 Tỷ', g: '-43%', us: '28.9K', ug: '-58%', tr: '4.7 Tỷ', tu: '161.8K', re: '12,918', url: 'https://www.tiktok.com/view/product/1729758198371814393' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long Pro 027 TL-105 - 3 màu mực thân bút pastel', sc: 'but_bi', br: 'Thien Long', ch: 'shopee', pr: '30.5K', fm: 'Combo 20', rv: '899.5 Tr', g: '-2%', us: '29.7K', ug: '-19%', tr: '4.1 Tỷ', tu: '156.2K', re: '31,340', url: 'https://shopee.vn/product/101480242/21193760161' },
          { n: 'Combo 5 10 20 Bút bi dầu màu pastel Deli EQ32', sc: 'but_bi', br: 'Deli', ch: 'tiktok', pr: '30K', fm: 'Combo 20', rv: '815.2 Tr', g: '', us: '23.9K', ug: '', tr: '931.1 Tr', tu: '27.8K', re: '1,035', url: 'https://www.tiktok.com/view/product/1733976532781139583' },
          { n: 'Combo 20 Bút bi Thiên Long 027 Pro ngòi 0.5mm mực xanh đen thân bút pastel', sc: 'but_bi', br: 'Thien Long', ch: 'tiktok', pr: '110K', fm: 'Combo 20', rv: '603.8 Tr', g: '-19%', us: '5.6K', ug: '-30%', tr: '2.6 Tỷ', tu: '27.4K', re: '2,397', url: 'https://www.tiktok.com/view/product/1729758201010228217' },
          { n: 'Combo Bút bi Thiên Long Pro 027 TL-105 màu pastel ngòi 0.5mm', sc: 'but_bi', br: 'Thien Long', ch: 'shopee', pr: '26.25K', fm: 'Combo 5', rv: '554.9 Tr', g: '-32%', us: '19.5K', ug: '-44%', tr: '2.3 Tỷ', tu: '97.1K', re: '19,247', url: 'https://shopee.vn/product/368671137/23577091247' },
          { n: 'Bộ Bút Và Mực 5 Cái 0.5mm (Xanh/Đen/Đỏ)', sc: 'but_bi', br: 'Other', ch: 'tiktok', pr: '20K', fm: 'Combo 5', rv: '452.6 Tr', g: '-24%', us: '17.5K', ug: '+15%', tr: '3.2 Tỷ', tu: '84.1K', re: '9,285', url: 'https://www.tiktok.com/view/product/1730805887918246790' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-095 Butter Ink ngòi 0.5mm', sc: 'but_bi', br: 'Thien Long', ch: 'shopee', pr: '47.5K', fm: 'Combo 20', rv: '391.0 Tr', g: '-15%', us: '8.1K', ug: '-24%', tr: '3.2 Tỷ', tu: '79.5K', re: '16,264', url: 'https://shopee.vn/product/101480242/23576151438' },
          { n: 'Combo 20 Bút bi Thiên Long TL-027 ngòi 0.5mm - 4 màu mực', sc: 'but_bi', br: 'Thien Long', ch: 'shopee', pr: '84K', fm: 'Combo 20', rv: '381.8 Tr', g: '+4%', us: '4.6K', ug: '-5%', tr: '4.9 Tỷ', tu: '75.6K', re: '14,426', url: 'https://shopee.vn/product/368671137/16065421545' },
          { n: 'Combo 5 10 20 Bút bi Thiên Long TL-027 mực xanh đỏ đen tím ngòi 0.5mm', sc: 'but_bi', br: 'Thien Long', ch: 'shopee', pr: '22K', fm: 'Combo 20', rv: '364.8 Tr', g: '-10%', us: '16K', ug: '-18%', tr: '2.4 Tỷ', tu: '123.3K', re: '22,451', url: 'https://shopee.vn/product/101480242/23576151410' },
          { n: 'Vĩ 12 cây bút bi bấm Todosoyo mực xanh đầu bi 0.7mm', sc: 'but_bi', br: 'Todosoyo', ch: 'tiktok', pr: '88.1K', fm: 'Vĩ 12', rv: '352.0 Tr', g: '+92%', us: '3.7K', ug: '+78%', tr: '584.0 Tr', tu: '6.4K', re: '316', url: 'https://www.tiktok.com/view/product/1731005552529541547' }
        ]
      },
      but_gel: {
        kpi: [{ l: 'Gross Sales (VND)', v: '49.8', u: 'Tỷ', g: '+49%', sub: 'vs 33.5 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '1.9', u: 'Triệu', g: '-54%', sub: 'vs 4.0 triệu in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '44.6%', u: '', g: '+9.9pp', sub: 'vs 34.7% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '3.4', u: 'Nghìn', g: '-11%', sub: 'vs 3.8 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '49.8', u: 'Tỷ', g: '+49%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~12.9%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '44.6%', u: '', g: '+9.9pp', sub: 'vs 34.7% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'TL (20.5%)', u: '', g: '', sub: '4/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 27.0, pre: 20.45, c: '#f97316' }, { n: 'TikTok Shop', cur: 22.2, pre: 11.62, c: '#0f172a' }, { n: 'Lazada', cur: 0.677, pre: 1.47, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0052, pre: 0.024, c: '#1a94ff' }],
        brand: [{ n: 'Thiên Long', cur: 20.5, pre: 15.2, c: '#1a56db' }, { n: 'Deli', cur: 13.3, pre: 13.4, c: '#ef4444' }, { n: 'G-Star', cur: 3.0, pre: 3.3, c: '#10b981' }, { n: 'Bossee', cur: 2.8, pre: 3.0, c: '#f97316' }, { n: 'Classmate', cur: 2.8, pre: 3.2, c: '#8b5cf6' }, { n: 'Others', cur: 57.6, pre: 61.9, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 4.149, l: 0, t: 0 }, { r: '10K-30K', s: 14.101, l: 0, t: 0 }, { r: '30K-50K', s: 11.215, l: 0, t: 0 }, { r: '50K-75K', s: 8.456, l: 0, t: 0 }, { r: '75K-100K', s: 8.241, l: 0, t: 0 }, { r: '100K-150K', s: 2.008, l: 0, t: 0 }, { r: '150K-200K', s: 0.822, l: 0, t: 0 }, { r: '200K-350K', s: 0.489, l: 0, t: 0 }, { r: '350K-500K', s: 0.165, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 5-10-20 Bút gel Fasgel GEL-068', sc: 'but_gel', br: 'Thiên Long', ch: 'tiktok', pr: '27K', fm: 'Combo 20', rv: '1.3 Tỷ', g: '+57%', us: '42.9K', ug: '+52%', re: '5,334', url: 'https://www.tiktok.com/view/product/1732616810831906809' },
          { n: '10 bút tặng 20 ruột - COMBO bút gel xóa được', sc: 'but_gel', br: 'OEM/Khác', ch: 'tiktok', pr: '86K', fm: 'Combo 10', rv: '834.8 Tr', g: '-54%', us: '9.4K', ug: '-55%', re: '2,212', url: 'https://www.tiktok.com/view/product/1732466130837866215' },
          { n: 'Combo 5-10-20 Bút Gel Xóa Thiên Long TP-GELE01', sc: 'but_gel', br: 'Thiên Long', ch: 'shopee', pr: '58K', fm: 'Combo 20', rv: '727.0 Tr', g: '+29%', us: '12.7K', ug: '+17%', re: '13,427', url: 'https://shopee.vn/product/101480242/19292039434' },
          { n: 'Bút Bi Nước Deli Viết Gel Bấm A575 Ngòi 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'shopee', pr: '9K', fm: 'Single', rv: '628.0 Tr', g: '-26%', us: '67.6K', ug: '-26%', re: '121,481', url: 'https://shopee.vn/product/127805122/18109428728' },
          { n: 'Combo 5-10-20 Bút gel Thiên Long Happ Obby GEL-056', sc: 'but_gel', br: 'Thiên Long', ch: 'tiktok', pr: '44K', fm: 'Combo 20', rv: '571.4 Tr', g: '+126%', us: '12.7K', ug: '+119%', re: '993', url: 'https://www.tiktok.com/view/product/1732234716280294393' },
          { n: 'SET 8 bút gel Cao Cấp DUDU ngòi 0.5mm', sc: 'but_gel', br: 'DUDU', ch: 'tiktok', pr: '19.9K', fm: 'Set 8', rv: '504.1 Tr', g: '+76%', us: '24.5K', ug: '+62%', re: '2,499', url: 'https://www.tiktok.com/view/product/1732776664365893367' },
          { n: 'Bút bi nước mực gel bấm EG118 nhiều màu 0.5mm', sc: 'but_gel', br: 'Deli', ch: 'shopee', pr: '8.9K', fm: 'Single', rv: '493.0 Tr', g: '-15%', us: '57.3K', ug: '-15%', re: '54,594', url: 'https://shopee.vn/product/127805122/11463887013' },
          { n: 'Combo 24 bút gel khô nhanh GPKC-1001', sc: 'but_gel', br: 'OEM/Khác', ch: 'tiktok', pr: '75K', fm: 'Combo 24', rv: '457.5 Tr', g: '+146%', us: '6.4K', ug: '+136%', re: '1,767', url: 'https://www.tiktok.com/view/product/1730497909468793620' },
          { n: 'Combo 30 Bút Gel Xóa Được Ngòi Siêu Mảnh 0.5mm', sc: 'but_gel', br: 'OEM/Khác', ch: 'tiktok', pr: '99K', fm: 'Combo 30', rv: '451.6 Tr', g: '+21%', us: '4.5K', ug: '+18%', re: '816', url: 'https://www.tiktok.com/view/product/1730476333332400331' },
          { n: 'Combo 5-10-20 Bút gel Fasgel Thiên Long GEL-068', sc: 'but_gel', br: 'Thiên Long', ch: 'shopee', pr: '29.5K', fm: 'Combo 20', rv: '449.0 Tr', g: '+114%', us: '15.8K', ug: '+94%', re: '4,209', url: 'https://shopee.vn/product/101480242/42170566678' }
        ]
      }
    },
  },
  hoc_cu: {
    n: 'Học Cụ', i: '📐',
    sc: [{ k: 'all', n: 'Tất cả', i: '📊' }, { k: 'may_tinh', n: 'Máy Tính KH', i: '🔢' }, { k: 'tap_vo', n: 'Tập Vở Sổ', i: '📓' }, { k: 'balo', n: 'Balo Học Sinh', i: '🎒' }, { k: 'but_chi', n: 'Bút Chì', i: '✏️' }, { k: 'gom', n: 'Gôm Tẩy', i: '🧽' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '124.9', u: 'Tỷ', g: '+13%', sub: 'vs 110.1 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '2.4', u: 'Triệu', g: '-26%', sub: 'vs 3.2 triệu in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '42.6%', u: '', g: '+8.5pp', sub: 'vs 34.1% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '9.3', u: 'Nghìn', g: '-5%', sub: 'vs 9.9 nghìn in Q1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '124.9', u: 'Tỷ', g: '+13%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~17%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '42.6%', u: '', g: '+8.5pp', sub: 'vs 34.1% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Casio (20.8%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 70.4, pre: 69.0, c: '#f97316' }, { n: 'TikTok Shop', cur: 53.2, pre: 37.5, c: '#0f172a' }, { n: 'Lazada', cur: 1.2, pre: 3.4, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0818, pre: 0.143, c: '#1a94ff' }],
    brand: [{ n: 'Casio', cur: 20.8, pre: 20.0, c: '#8b5cf6' }, { n: 'Flexio', cur: 16.1, pre: 4.4, c: '#10b981' }, { n: 'Deli', cur: 3.3, pre: 2.3, c: '#ef4444' }, { n: 'Thiên Long', cur: 2.2, pre: 1.0, c: '#1a56db' }, { n: 'Others', cur: 57.6, pre: 72.3, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 3.298, l: 0, t: 0 }, { r: '10K-30K', s: 17.560, l: 0, t: 0 }, { r: '30K-50K', s: 11.783, l: 0, t: 0 }, { r: '50K-75K', s: 13.342, l: 0, t: 0 }, { r: '75K-100K', s: 9.253, l: 0, t: 0 }, { r: '100K-150K', s: 11.931, l: 0, t: 0 }, { r: '150K-200K', s: 9.519, l: 0, t: 0 }, { r: '200K-350K', s: 17.685, l: 0, t: 0 }, { r: '350K-500K', s: 3.937, l: 0, t: 0 }, { r: '500K-750K', s: 22.801, l: 0, t: 0 }, { r: '750K-1M', s: 2.733, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.557, l: 0, t: 0 }],
    prod: [
      { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 1)', sc: 'may_tinh', br: 'Flexio', ch: 'tiktok', pr: '662K', fm: 'Single', rv: '5.5 Tỷ', g: '-6%', us: '8.5K', ug: '-24%', re: '5,876', tr: '24.4 Tỷ', tu: '45.4K', url: 'https://www.tiktok.com/view/product/1729647692608932857' },
      { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 2)', sc: 'may_tinh', br: 'Flexio', ch: 'tiktok', pr: '662K', fm: 'Single', rv: '4.3 Tỷ', g: '+15%', us: '7.3K', ug: '+6%', re: '4,612', tr: '18.3 Tỷ', tu: '34.3K', url: 'https://www.tiktok.com/view/product/1729672334167935993' },
      { n: 'Máy tính Flexio Fx799VN - Máy tính học sinh', sc: 'may_tinh', br: 'Flexio', ch: 'shopee', pr: '586K', fm: 'Single', rv: '3.4 Tỷ', g: '+4%', us: '5.9K', ug: '+3%', re: '6,853', tr: '13.8 Tỷ', tu: '24.5K', url: 'https://shopee.vn/product/101480242/22471594302' },
      { n: 'Máy tính cầm tay Flexio Fx799VN (Miền Bắc)', sc: 'may_tinh', br: 'Flexio', ch: 'shopee', pr: '586K', fm: 'Single', rv: '1.8 Tỷ', g: '-21%', us: '3.1K', ug: '-27%', re: '6,205', tr: '11.6 Tỷ', tu: '21.1K', url: 'https://shopee.vn/product/368671137/23077933746' },
      { n: 'Máy tính Casio FX-880BTG Chính hãng Bitex', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '636K', fm: 'Single', rv: '1.4 Tỷ', g: '+18%', us: '2.3K', ug: '+24%', re: '8,853', tr: '21.8 Tỷ', tu: '30.9K', url: 'https://shopee.vn/product/140792708/18134522949' },
      { n: 'Balo đi học nam nữ chống nước NATOLI', sc: 'balo', br: 'Natoli', ch: 'shopee', pr: '259K', fm: 'Single', rv: '1.2 Tỷ', g: '+29%', us: '4.8K', ug: '+11%', re: '16,733', tr: '14.0 Tỷ', tu: '60.4K', url: 'https://shopee.vn/product/515748887/12786241026' },
      { n: 'Máy Tính Khoa Học Casio FX-580VNX (Bitex HN)', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '804K', fm: 'Single', rv: '1.0 Tỷ', g: '-43%', us: '1.3K', ug: '-46%', re: '1,566', tr: '5.2 Tỷ', tu: '6.9K', url: 'https://shopee.vn/product/292001772/23973252157' },
      { n: 'Balo đi học thương hiệu NATOLI Basic', sc: 'balo', br: 'Natoli', ch: 'tiktok', pr: '259K', fm: 'Single', rv: '953.8 Tr', g: '+28%', us: '3.4K', ug: '+13%', re: '4,490', tr: '8.9 Tỷ', tu: '39.5K', url: 'https://www.tiktok.com/view/product/1729439994934889330' },
      { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 3)', sc: 'may_tinh', br: 'Flexio', ch: 'shopee', pr: '586K', fm: 'Single', rv: '892.5 Tr', g: '-4%', us: '1.6K', ug: '+2%', re: '1,219', tr: '2.5 Tỷ', tu: '4.4K', url: 'https://shopee.vn/product/101480242/22675511601' },
      { n: 'Balo đi học vải bố in hình gấu dễ thương', sc: 'balo', br: 'OEM', ch: 'tiktok', pr: '42.9K', fm: 'Single', rv: '801.0 Tr', g: '+88%', us: '19.8K', ug: '+72%', re: '5,642', tr: '1.7 Tỷ', tu: '46.8K', url: 'https://www.tiktok.com/view/product/1730110922353182764' }
    ],
    sdata: {
      may_tinh: {
        kpi: [{ l: 'Gross Sales (VND)', v: '54.7', u: 'Tỷ', g: '+61%', sub: 'vs 34.0 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '165.9', u: 'Nghìn', g: '+46%', sub: 'vs 113.4 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '44.8%', u: '', g: '+21.6pp', sub: 'vs 23.2% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '694', u: '', g: '-12%', sub: 'vs 788 in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '54.7', u: 'Tỷ', g: '+61%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~56.9%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '44.8%', u: '', g: '+21.6pp', sub: 'vs 23.2% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Casio (47.5%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 29.4, pre: 23.9, c: '#f97316' }, { n: 'TikTok Shop', cur: 24.5, pre: 7.9, c: '#0f172a' }, { n: 'Lazada', cur: 0.604, pre: 2.0, c: '#3b82f6' }, { n: 'Tiki', cur: 0.156, pre: 0.27, c: '#1a94ff' }],
        brand: [{ n: 'Casio', cur: 47.5, pre: 64.8, c: '#8b5cf6' }, { n: 'Flexio', cur: 36.7, pre: 14.1, c: '#10b981' }, { n: 'Deli', cur: 0.7, pre: 1.5, c: '#ef4444' }, { n: 'Fahasa', cur: 0.7, pre: 5.8, c: '#3b82f6' }, { n: 'Texas Instruments', cur: 0.6, pre: 0.6, c: '#f59e0b' }, { n: 'Others', cur: 13.8, pre: 13.2, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 0.217, l: 0, t: 0 }, { r: '30K-50K', s: 1.405, l: 0, t: 0 }, { r: '50K-75K', s: 0.879, l: 0, t: 0 }, { r: '75K-100K', s: 0.303, l: 0, t: 0 }, { r: '100K-150K', s: 0.538, l: 0, t: 0 }, { r: '150K-200K', s: 1.852, l: 0, t: 0 }, { r: '200K-350K', s: 4.132, l: 0, t: 0 }, { r: '350K-500K', s: 1.234, l: 0, t: 0 }, { r: '500K-750K', s: 25.954, l: 0, t: 0 }, { r: '750K-1M', s: 17.780, l: 0, t: 0 }],
        prod: [
          { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 1)', sc: 'may_tinh', br: 'Flexio', ch: 'tiktok', pr: '586.1K', fm: 'Pastel', rv: '5.5 Tỷ', g: '-6%', us: '8.5K', ug: '-24%', re: '5,876', tr: '24.5 Tỷ', tu: '45.6K', url: 'https://www.tiktok.com/view/product/1729647692608932857' },
          { n: 'Máy tính Casio Fx-580VNX đa sắc màu', sc: 'may_tinh', br: 'Casio', ch: 'tiktok', pr: '780K', fm: 'Color', rv: '4.6 Tỷ', g: '-19%', us: '5.7K', ug: '-25%', re: '3,304', tr: '24.1 Tỷ', tu: '32.6K', url: 'https://www.tiktok.com/view/product/1729430797999508070' },
          { n: 'Máy tính Flexio Fx799VN 4 màu pastel (Mã 2)', sc: 'may_tinh', br: 'Flexio', ch: 'tiktok', pr: '586.1K', fm: 'Pastel', rv: '4.3 Tỷ', g: '+15%', us: '7.3K', ug: '+6%', re: '4,612', tr: '18.4 Tỷ', tu: '34.3K', url: 'https://www.tiktok.com/view/product/1729672334167935993' },
          { n: 'Máy Tính Casio FX-580VN X (Bitex Official)', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '805K', fm: 'Single', rv: '4.2 Tỷ', g: '-44%', us: '5.2K', ug: '-48%', re: '23,919', tr: '61.3 Tỷ', tu: '86.0K', url: 'https://shopee.vn/product/140792708/4558727890' },
          { n: 'Máy tính Flexio Fx799VN (Thiên Long Store)', sc: 'may_tinh', br: 'Flexio', ch: 'shopee', pr: '586.1K', fm: 'Single', rv: '3.4 Tỷ', g: '+4%', us: '5.9K', ug: '+3%', re: '6,853', tr: '13.8 Tỷ', tu: '24.5K', url: 'https://shopee.vn/product/101480242/22471594302' },
          { n: 'Máy Tính Casio FX 580 (Nhà sách FAHASA)', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '805.2K', fm: 'Single', rv: '3.0 Tỷ', g: '-66%', us: '3.8K', ug: '-68%', re: '10,222', tr: '35.0 Tỷ', tu: '49.2K', url: 'https://shopee.vn/product/142856269/9633799567' },
          { n: 'Máy tính cầm tay Flexio Fx799VN (Miền Bắc)', sc: 'may_tinh', br: 'Flexio', ch: 'shopee', pr: '586K', fm: 'Single', rv: '1.8 Tỷ', g: '-21%', us: '3.1K', ug: '-27%', re: '6,205', tr: '11.6 Tỷ', tu: '21.1K', url: 'https://shopee.vn/product/368671137/23077933746' },
          { n: 'SALE Máy tính Casio Fx-580VNX (Bitex TikTok)', sc: 'may_tinh', br: 'Casio', ch: 'tiktok', pr: '827K', fm: 'Single', rv: '1.5 Tỷ', g: '+64%', us: '1.8K', ug: '+48%', re: '542', tr: '4.5 Tỷ', tu: '5.8K', url: 'https://www.tiktok.com/view/product/1730689555810650726' },
          { n: 'Máy Tính Casio FX-880BTG (Bitex Official)', sc: 'may_tinh', br: 'Casio', ch: 'shopee', pr: '636K', fm: 'Single', rv: '1.4 Tỷ', g: '+18%', us: '2.3K', ug: '+24%', re: '8,853', tr: '21.8 Tỷ', tu: '30.9K', url: 'https://shopee.vn/product/140792708/18134522949' },
          { n: 'Máy tính cầm tay Flexio Fx799VN (Miền Trung)', sc: 'may_tinh', br: 'Flexio', ch: 'shopee', pr: '586K', fm: 'Single', rv: '1.4 Tỷ', g: '+49%', us: '2.4K', ug: '+38%', re: '2,159', tr: '4.3 Tỷ', tu: '7.9K', url: 'https://shopee.vn/product/367619913/23371607410' }
        ]
      },
      but_chi: {
        kpi: [{ l: 'Gross Sales (VND)', v: '3.8', u: 'Tỷ', g: '+49%', sub: 'vs 2.5 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '165.2', u: 'Nghìn', g: '-36%', sub: 'vs 259.8 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '29.0%', u: '', g: '+9.7pp', sub: 'vs 19.3% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.1', u: 'Nghìn', g: '-9%', sub: 'vs 1.3 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '3.8', u: 'Tỷ', g: '+49%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~26.3%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '29.0%', u: '', g: '+9.7pp', sub: 'vs 19.3% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (28.9%)', u: '', g: '', sub: '4/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 2.7, pre: 1.9, c: '#f97316' }, { n: 'TikTok Shop', cur: 1.1, pre: 0.49, c: '#0f172a' }, { n: 'Lazada', cur: 0.052, pre: 0.18, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0013, pre: 0.002, c: '#1a94ff' }],
        brand: [{ n: 'Deli', cur: 28.9, pre: 28.8, c: '#ef4444' }, { n: 'Thiên Long', cur: 17.5, pre: 13.0, c: '#1a56db' }, { n: 'G-Star', cur: 4.3, pre: 3.5, c: '#10b981' }, { n: 'Kohno', cur: 3.3, pre: 3.8, c: '#8b5cf6' }, { n: 'Classmate', cur: 2.1, pre: 1.5, c: '#f97316' }, { n: 'Others', cur: 43.9, pre: 49.4, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.309, l: 0, t: 0 }, { r: '10K-30K', s: 0.979, l: 0, t: 0 }, { r: '30K-50K', s: 1.740, l: 0, t: 0 }, { r: '50K-75K', s: 0.298, l: 0, t: 0 }, { r: '75K-100K', s: 0.105, l: 0, t: 0 }, { r: '100K-150K', s: 0.138, l: 0, t: 0 }, { r: '150K-200K', s: 0.082, l: 0, t: 0 }, { r: '200K-350K', s: 0.101, l: 0, t: 0 }],
        prod: [
          { n: 'Hộp 10 bút chì gỗ Deli gradient', sc: 'but_chi', br: 'Deli', ch: 'tiktok', pr: '30K', fm: 'Hộp 10', rv: '188.6 Tr', g: '-33%', us: '5.7K', ug: '-19%', re: '1,242', tr: '649.0 Tr', tu: '19.3K', url: 'https://www.tiktok.com/view/product/1731706412921292415' },
          { n: 'Bút Chì Ngũ Sắc Phác Thảo', sc: 'but_chi', br: 'OEM', ch: 'tiktok', pr: '15.8K', fm: 'Single', rv: '150.8 Tr', g: '+77%', us: '8.8K', ug: '+78%', re: '1,220', tr: '239.6 Tr', tu: '14.0K', url: 'https://www.tiktok.com/view/product/1732959231009326668' },
          { n: 'Hộp 10 cây Bút chì Thiên Long GP-018', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '42K', fm: 'Hộp 10', rv: '135.8 Tr', g: '+310%', us: '3.2K', ug: '+305%', re: '2,325', tr: '560.0 Tr', tu: '13.8K', url: 'https://shopee.vn/product/101480242/1635055148' },
          { n: 'Hộp 10 cây Bút chì Thiên Long GP-01', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '41.8K', fm: 'Hộp 10', rv: '129.8 Tr', g: '-48%', us: '3.5K', ug: '-47%', re: '7,887', tr: '1.4 Tỷ', tu: '42.6K', url: 'https://shopee.vn/product/101480242/1673220598' },
          { n: 'Vỉ 10-12 Bút Chì Gỗ Deli', sc: 'but_chi', br: 'Deli', ch: 'shopee', pr: '30K', fm: 'Vỉ 10-12', rv: '106.2 Tr', g: '-54%', us: '3.5K', ug: '-58%', re: '38,570', tr: '3.0 Tỷ', tu: '183.0K', url: 'https://shopee.vn/product/127805122/5431388748' },
          { n: 'Hộp 10 bút chì học sinh Thiên Long 2B', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '37K', fm: 'Hộp 10', rv: '67.1 Tr', g: '-67%', us: '1.9K', ug: '-70%', re: '5,140', tr: '928.3 Tr', tu: '30.3K', url: 'https://shopee.vn/product/101480242/23990060019' },
          { n: 'Hộp 10 Bút Chì Gỗ Deli gradient', sc: 'but_chi', br: 'Deli', ch: 'shopee', pr: '35K', fm: 'Hộp 10', rv: '58.2 Tr', g: '-38%', us: '1.4K', ug: '-36%', re: '952', tr: '224.3 Tr', tu: '5.3K', url: 'https://shopee.vn/product/127805122/43752642686' },
          { n: 'Combo 10 Bút Chì Gỗ HB Có Tẩy', sc: 'but_chi', br: 'OEM', ch: 'tiktok', pr: '19K', fm: 'Combo 10', rv: '58.2 Tr', g: '-75%', us: '3.4K', ug: '-78%', re: '3,196', tr: '587.0 Tr', tu: '41.6K', url: 'https://www.tiktok.com/view/product/1731545738222273558' },
          { n: 'Bút Chì 2B HB Nusign Deli', sc: 'but_chi', br: 'Deli', ch: 'shopee', pr: '8K', fm: 'Single', rv: '52.5 Tr', g: '-42%', us: '7.0K', ug: '-48%', re: '9,660', tr: '561.4 Tr', tu: '132.7K', url: 'https://shopee.vn/product/127805122/23083762317' },
          { n: 'Bút chì gỗ Strive Thiên Long', sc: 'but_chi', br: 'Thiên Long', ch: 'shopee', pr: '116K', fm: 'Single', rv: '52.3 Tr', g: '-40%', us: '579', ug: '-40%', re: '360', tr: '139.8 Tr', tu: '1.6K', url: 'https://shopee.vn/product/368671137/26542621598' }
        ],
      },
      tap_vo: {
        kpi: [{ l: 'Gross Sales (VND)', v: '9.7', u: 'Tỷ', g: '+33%', sub: 'vs 7.3 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '282.8', u: 'Nghìn', g: '-20%', sub: 'vs 355.1 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '27.8%', u: '', g: '+6.3pp', sub: 'vs 21.5% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.2', u: 'Nghìn', g: '-6%', sub: 'vs 1.3 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '9.7', u: 'Tỷ', g: '+33%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~15.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '27.8%', u: '', g: '+6.3pp', sub: 'vs 21.5% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (18.2%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 6.8, pre: 5.44, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.7, pre: 1.57, c: '#0f172a' }, { n: 'Lazada', cur: 0.170, pre: 0.29, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0119, pre: 0.009, c: '#1a94ff' }],
        brand: [{ n: 'Thiên Long', cur: 18.2, pre: 6.1, c: '#1a56db' }, { n: 'Total', cur: 13.9, pre: 12.5, c: '#10b981' }, { n: 'Hồng Hà', cur: 11.9, pre: 11.1, c: '#ef4444' }, { n: 'Hải Tiến', cur: 11.6, pre: 13.5, c: '#8b5cf6' }, { n: 'Classmate', cur: 8.9, pre: 4.2, c: '#f97316' }, { n: 'Others', cur: 35.5, pre: 52.6, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.331, l: 0, t: 0 }, { r: '10K-30K', s: 2.379, l: 0, t: 0 }, { r: '30K-50K', s: 1.836, l: 0, t: 0 }, { r: '50K-75K', s: 2.384, l: 0, t: 0 }, { r: '75K-100K', s: 1.294, l: 0, t: 0 }, { r: '100K-150K', s: 1.197, l: 0, t: 0 }, { r: '150K-200K', s: 0.188, l: 0, t: 0 }, { r: '200K-350K', s: 0.077, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 10 Tập học sinh 96 trang 4 ô ly', sc: 'tap_vo', br: 'Thiên Long', ch: 'shopee', pr: '133K', fm: 'Combo 10', rv: '248.0 Tr', g: '-35%', us: '1.8K', ug: '-37%', re: '1,145', tr: '1.0 Tỷ', tu: '7.7K', url: 'https://shopee.vn/product/101480242/29587705915' },
          { n: 'Tập Vở Học Tập B5 Kẻ Caro 30 Tờ', sc: 'tap_vo', br: 'Tuệ Minh', ch: 'tiktok', pr: '26.4K', fm: 'Single', rv: '226.9 Tr', g: '+73%', us: '8.2K', ug: '+78%', re: '14,200', tr: '398.7 Tr', tu: '14.2K', url: 'https://www.tiktok.com/view/product/1731613652387529894' },
          { n: 'Combo 5 quyển Vở kẻ ngang 80 trang Total', sc: 'tap_vo', br: 'Total', ch: 'tiktok', pr: '28.2K', fm: 'Combo 5', rv: '174.2 Tr', g: '+750%', us: '5.7K', ug: '+683%', re: '294', tr: '254.7 Tr', tu: '8.5K', url: 'https://www.tiktok.com/view/product/1730579631691172532' },
          { n: 'Vở Kẻ Ngang B5 HUERARUMO 300–500 Trang', sc: 'tap_vo', br: 'OEM', ch: 'tiktok', pr: '66.2K', fm: 'Single', rv: '170.7 Tr', g: '+5754%', us: '2.4K', ug: '+5229%', re: '74', tr: '184.7 Tr', tu: '2.6K', url: 'https://www.tiktok.com/view/product/1732864714683221266' },
          { n: 'Combo 10 Quyển Tập Vở Học Sinh 96 Trang', sc: 'tap_vo', br: 'OEM', ch: 'tiktok', pr: '62K', fm: 'Combo 10', rv: '138.1 Tr', g: '-2%', us: '2.2K', ug: '-2%', re: '808', tr: '696.2 Tr', tu: '11.2K', url: 'https://www.tiktok.com/view/product/1731017686634629528' },
          { n: 'Combo 10 Vở 4 ô ly Thiên Long 80 trang', sc: 'tap_vo', br: 'Thiên Long', ch: 'shopee', pr: '120K', fm: 'Combo 10', rv: '121.1 Tr', g: '+72%', us: '1.0K', ug: '+51%', re: '2,325', tr: '496.5 Tr', tu: '4.9K', url: 'https://shopee.vn/product/368671137/40908455201' },
          { n: 'Combo Tập vở dán gáy Thiên Long 80-120tr', sc: 'tap_vo', br: 'Thiên Long', ch: 'shopee', pr: '95K', fm: 'Combo 2', rv: '111.7 Tr', g: '+211%', us: '1.5K', ug: '+288%', re: '1,800', tr: '147.7 Tr', tu: '1.8K', url: 'https://shopee.vn/product/368671137/44652393969' },
          { n: 'Lốc 10 QUYỂN TẬP 96 TRANG (Hải Hà)', sc: 'tap_vo', br: 'Hải Tiến', ch: 'shopee', pr: '54.9K', fm: 'Combo 10', rv: '109.1 Tr', g: '-47%', us: '2.0K', ug: '-47%', re: '15,000', tr: '778.2 Tr', tu: '15.0K', url: 'https://shopee.vn/product/87162080/29908288406' },
          { n: 'Vở kẻ ngang chấm dán gáy Crabit', sc: 'tap_vo', br: 'Crabit', ch: 'shopee', pr: '54K', fm: 'Single', rv: '102.0 Tr', g: '+15%', us: '1.9K', ug: '+18%', re: '29,400', tr: '1.4 Tỷ', tu: '29.4K', url: 'https://shopee.vn/product/19268307/19580909018' },
          { n: 'Vở Ô Ly Hồng Hà Cho Học Sinh', sc: 'tap_vo', br: 'Hồng Hà', ch: 'shopee', pr: '100.5K', fm: 'Single', rv: '101.9 Tr', g: '+35%', us: '1.0K', ug: '+30%', re: '3,100', tr: '280.9 Tr', tu: '3.1K', url: 'https://shopee.vn/product/1089361687/24774375032' }
        ]
      },
      balo: {
        kpi: [{ l: 'Gross Sales (VND)', v: '52.8', u: 'Tỷ', g: '-15%', sub: 'vs 62.1 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '341.1', u: 'Nghìn', g: '-9%', sub: 'vs 374.1 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '48.9%', u: '', g: '+14.3pp', sub: 'vs 34.6% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '2.2', u: 'Nghìn', g: '-7%', sub: 'vs 2.4 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '52.8', u: 'Tỷ', g: '-15%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~14.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '48.9%', u: '', g: '+14.3pp', sub: 'vs 34.6% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Natoli (5.5%)', u: '', g: '', sub: '2/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 26.7, pre: 39.8, c: '#f97316' }, { n: 'TikTok Shop', cur: 25.8, pre: 21.5, c: '#0f172a' }, { n: 'Lazada', cur: 0.3269, pre: 0.77, c: '#3b82f6' }, { n: 'Tiki', cur: 0.000816, pre: 0.116, c: '#1a94ff' }],
        brand: [{ n: 'Natoli', cur: 5.5, pre: 2.9, c: '#f97316' }, { n: 'Genbag', cur: 1.9, pre: 2.7, c: '#1a56db' }, { n: 'Như Ý Shop', cur: 1.4, pre: 0, c: '#10b981' }, { n: 'Tee Sik', cur: 1.3, pre: 0, c: '#8b5cf6' }, { n: 'Ez Balo', cur: 1.3, pre: 0.9, c: '#ef4444' }, { n: 'Others', cur: 88.6, pre: 93.5, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 0.221, l: 0, t: 0 }, { r: '30K-50K', s: 1.642, l: 0, t: 0 }, { r: '50K-75K', s: 2.555, l: 0, t: 0 }, { r: '75K-100K', s: 3.672, l: 0, t: 0 }, { r: '100K-150K', s: 8.604, l: 0, t: 0 }, { r: '150K-200K', s: 9.748, l: 0, t: 0 }, { r: '200K-350K', s: 17.065, l: 0, t: 0 }, { r: '350K-500K', s: 5.599, l: 0, t: 0 }, { r: '500K-750K', s: 2.278, l: 0, t: 0 }, { r: '750K-1M', s: 1.074, l: 0, t: 0 }],
        prod: [
          { n: 'Balo Đi Học Thời Trang Hip Balo', sc: 'balo', br: 'Balo HIP', ch: 'tiktok', pr: '228K', fm: 'Trend', rv: '1.6 Tỷ', g: '+19%', us: '7.0K', ug: '-5%', re: '13,798', tr: '22.4 Tỷ', tu: '139.0K', url: 'https://www.tiktok.com/view/product/1730256379947223841' },
          { n: 'Balo nam nữ Natoli chống nước (Mã 1)', sc: 'balo', br: 'Natoli', ch: 'shopee', pr: '250K', fm: 'Single', rv: '1.2 Tỷ', g: '+29%', us: '4.8K', ug: '+11%', re: '16,733', tr: '14.0 Tỷ', tu: '60.4K', url: 'https://shopee.vn/product/515748887/12786241026' },
          { n: 'Balo thương hiệu Natoli Basic (Mã 2)', sc: 'balo', br: 'Natoli', ch: 'tiktok', pr: '280K', fm: 'Basic', rv: '953.8 Tr', g: '+28%', us: '3.4K', ug: '+13%', re: '4,490', tr: '9.0 Tỷ', tu: '39.6K', url: 'https://www.tiktok.com/view/product/1729439994934889330' },
          { n: 'Balo vải bố in hình gấu dễ thương', sc: 'balo', br: 'LION store', ch: 'tiktok', pr: '40K', fm: 'Cute', rv: '801.0 Tr', g: '+88%', us: '19.8K', ug: '+72%', re: '5,642', tr: '1.7 Tỷ', tu: '46.9K', url: 'https://www.tiktok.com/view/product/1730110922353182764' },
          { n: 'Balo nữ GENBAG ulzzang trơn basic', sc: 'balo', br: 'Genbag', ch: 'tiktok', pr: '227K', fm: 'Ulzzang', rv: '771.5 Tr', g: '+75%', us: '3.4K', ug: '+46%', re: '2,665', tr: '4.7 Tỷ', tu: '22.3K', url: 'https://www.tiktok.com/view/product/1729818001856957009' },
          { n: 'Balo họa tiết dễ thương (Mihachi)', sc: 'balo', br: 'Mihachi', ch: 'tiktok', pr: '76K', fm: 'Họa tiết', rv: '509.5 Tr', g: '+217%', us: '6.7K', ug: '+188%', re: '3,178', tr: '706.2 Tr', tu: '11.4K', url: 'https://shopee.vn/product/29037116/44458528652' },
          { n: 'Balo Hello Kitty dáng yêu cute', sc: 'balo', br: 'OEM/Khác', ch: 'tiktok', pr: '94K', fm: 'Cute', rv: '498.9 Tr', g: '+37%', us: '5.3K', ug: '+22%', re: '2,097', tr: '1.4 Tỷ', tu: '15.8K', url: 'https://www.tiktok.com/view/product/1731967841856358013' },
          { n: 'Balo mẫu giáo 1-5 tuổi (Baloha)', sc: 'balo', br: 'Baloha', ch: 'tiktok', pr: '95K', fm: 'Kids', rv: '447.0 Tr', g: '+136%', us: '4.7K', ug: '+87%', re: '4,868', tr: '3.0 Tỷ', tu: '46.2K', url: 'https://www.tiktok.com/view/product/1729596877973456992' },
          { n: 'Balo học sinh siêu nhẹ cấp 1-2', sc: 'balo', br: 'OEM/Khác', ch: 'tiktok', pr: '165K', fm: 'Siêu nhẹ', rv: '446.5 Tr', g: '+28%', us: '2.7K', ug: '+16%', re: '2,074', tr: '4.3 Tỷ', tu: '28.6K', url: 'https://www.tiktok.com/view/product/1730326057829960444' },
          { n: 'Balo Ulzzang Hàn Quốc trơn basic', sc: 'balo', br: 'Belle Bag', ch: 'shopee', pr: '114K', fm: 'Ulzzang', rv: '444.5 Tr', g: '+47%', us: '3.9K', ug: '+53%', re: '16,085', tr: '7.3 Tỷ', tu: '71.3K', url: 'https://shopee.vn/product/975629330/20977181092' }
        ]
      },
      gom: {
        kpi: [{ l: 'Gross Sales (VND)', v: '3.4', u: 'Tỷ', g: '+40%', sub: 'vs 2.4 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '267.7', u: 'Nghìn', g: '-49%', sub: 'vs 521.3 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '27.9%', u: '', g: '+9.5pp', sub: 'vs 18.4% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.6', u: 'Nghìn', g: '-12%', sub: 'vs 1.8 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '3.4', u: 'Tỷ', g: '+40%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~21.4%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '27.9%', u: '', g: '+9.5pp', sub: 'vs 18.4% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (76.5%)', u: '', g: '', sub: '8/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 2.4, pre: 1.83, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.947, pre: 0.44, c: '#0f172a' }, { n: 'Lazada', cur: 0.0321, pre: 0.128, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0002, pre: 0.001, c: '#1a94ff' }],
        brand: [{ n: 'Deli', cur: 76.5, pre: 55.6, c: '#ef4444' }, { n: 'Thiên Long', cur: 10.0, pre: 12.3, c: '#1a56db' }, { n: 'Four Candies', cur: 3.3, pre: 1.6, c: '#10b981' }, { n: 'Tombow', cur: 2.6, pre: 3.8, c: '#8b5cf6' }, { n: 'Sao Thiên', cur: 2.0, pre: 0, c: '#f97316' }, { n: 'Others', cur: 5.6, pre: 26.7, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.975, l: 0, t: 0 }, { r: '10K-30K', s: 1.448, l: 0, t: 0 }, { r: '30K-50K', s: 0.593, l: 0, t: 0 }, { r: '50K-75K', s: 0.197, l: 0, t: 0 }, { r: '75K-100K', s: 0.043, l: 0, t: 0 }, { r: '100K-150K', s: 0.088, l: 0, t: 0 }, { r: '150K-200K', s: 0.027, l: 0, t: 0 }],
        prod: [
          { n: 'Set 4 5 6 tẩy không vụn Nusign x Deli', sc: 'gom', br: 'Deli', ch: 'tiktok', pr: '35K', fm: 'Set 4-6', rv: '245.5 Tr', g: '-53%', us: '7.0K', ug: '-53%', re: '2,531', tr: '1.1 Tỷ', tu: '36.2K', url: 'https://www.tiktok.com/view/product/1730991643525286527' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign (Mã 1)', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '20K', fm: 'Hộp 6', rv: '74.8 Tr', g: '+94%', us: '3.7K', ug: '+5%', re: '2,547', tr: '234.9 Tr', tu: '11.3K', url: 'https://shopee.vn/product/348955539/29568624298' },
          { n: 'Hộp 6 Gôm Tẩy Siêu Sạch Deli Nusign (Mã 2)', sc: 'gom', br: 'Deli', ch: 'tiktok', pr: '28K', fm: 'Hộp 6', rv: '63.0 Tr', g: '-58%', us: '2.2K', ug: '-59%', re: '3,679', tr: '381.4 Tr', tu: '17.6K', url: 'https://shopee.vn/product/127805122/26213312447' },
          { n: 'Gôm tẩy 2 đầu Deli - Tẩy chì và mài giấy', sc: 'gom', br: 'Deli', ch: 'tiktok', pr: '18K', fm: '2 Đầu', rv: '58.8 Tr', g: '-1%', us: '3.2K', ug: '-30%', re: '1,213', tr: '230.3 Tr', tu: '35.0K', url: 'https://www.tiktok.com/view/product/1729756485631576703' },
          { n: 'Gôm Tẩy Định Vị Tẩy Bút Chì Deli', sc: 'gom', br: 'Deli', ch: 'tiktok', pr: '9K', fm: 'Single', rv: '50.8 Tr', g: '-31%', us: '5.7K', ug: '-38%', re: '6,618', tr: '361.6 Tr', tu: '43.4K', url: 'https://shopee.vn/product/127805122/28757886370' },
          { n: 'Combo Gôm Tẩy bút chì Thiên Long', sc: 'gom', br: 'Thiên Long', ch: 'shopee', pr: '22K', fm: 'Combo 10', rv: '49.4 Tr', g: '-78%', us: '2.2K', ug: '-70%', re: '3,468', tr: '345.0 Tr', tu: '19.7K', url: 'https://shopee.vn/product/368671137/23922638238' },
          { n: 'Gôm Tẩy Deli Màu Trắng - Tẩy Sạch Ít Vụn', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '4.8K', fm: 'Single', rv: '47.1 Tr', g: '-18%', us: '9.9K', ug: '-17%', re: '17,846', tr: '510.6 Tr', tu: '169.4K', url: 'https://shopee.vn/product/127805122/3824689315' },
          { n: 'Gôm tẩy không bụi mịn Thiên Long Strive', sc: 'gom', br: 'Thiên Long', ch: 'shopee', pr: '4.8K', fm: 'Single', rv: '46.8 Tr', g: '-59%', us: '9.7K', ug: '-59%', re: '8,824', tr: '317.7 Tr', tu: '61.0K', url: 'https://shopee.vn/product/101480242/26355337705' },
          { n: 'Gôm Tẩy Chì 2 Đầu Deli - Mã 45,5tr', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '9.2K', fm: 'Single', rv: '45.5 Tr', g: '-37%', us: '4.9K', ug: '-14%', re: '3,545', tr: '255.0 Tr', tu: '26.2K', url: 'https://shopee.vn/product/127805122/23858398597' },
          { n: 'Gôm Tẩy Chì Và Mực 2 Đầu Deli', sc: 'gom', br: 'Deli', ch: 'shopee', pr: '11K', fm: 'Single', rv: '45.4 Tr', g: '-1%', us: '4.0K', ug: '+10%', re: '2,273', tr: '165.0 Tr', tu: '15.8K', url: 'https://shopee.vn/product/348955539/25051528382' }
        ]
      }
    },
  },
  my_thuat: {
    n: 'Mỹ Thuật', i: '🎨',
    sc: [{ k: 'all', n: 'Tất cả', i: '📊' }, { k: 'sap_mau', n: 'Sáp Màu', i: '🖍️' }, { k: 'acrylic', n: 'Acrylic Markers', i: '🖋️' }, { k: 'long_mt', n: 'Bút Lông Màu', i: '🖌️' }, { k: 'chi_mau', n: 'Bút Chì Màu', i: '✏️' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '70.4', u: 'Tỷ', g: '+24%', sub: 'vs 56.9 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '1.5', u: 'Triệu', g: '-14%', sub: 'vs 1.8 triệu in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '37.4%', u: '', g: '+7.0pp', sub: 'vs 30.4% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '5.9', u: 'Nghìn', g: '-9%', sub: 'vs 6.5 nghìn in Q1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '70.4', u: 'Tỷ', g: '+24%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~12.6%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '37.4%', u: '', g: '+7.0pp', sub: 'vs 30.4% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (34.6%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 43.5, pre: 37.5, c: '#f97316' }, { n: 'TikTok Shop', cur: 26.3, pre: 17.3, c: '#0f172a' }, { n: 'Lazada', cur: 0.6394, pre: 2.13, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0107, pre: 0.0713, c: '#1a94ff' }],
    brand: [{ n: 'Deli', cur: 34.6, pre: 30, c: '#ef4444' }, { n: 'Colokit', cur: 15.5, pre: 12, c: '#fbbf24' }, { n: 'Global Art', cur: 13.9, pre: 8, c: '#10b981' }, { n: 'Mont Marte', cur: 10.3, pre: 8, c: '#8b5cf6' }, { n: 'Bossee', cur: 9.1, pre: 0, c: '#f97316' }, { n: 'Others', cur: 16.6, pre: 42, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 1.19, l: 0, t: 0 }, { r: '10K-30K', s: 11.71, l: 0, t: 0 }, { r: '30K-50K', s: 12.94, l: 0, t: 0 }, { r: '50K-75K', s: 15.79, l: 0, t: 0 }, { r: '75K-100K', s: 7.49, l: 0, t: 0 }, { r: '100K-150K', s: 6.05, l: 0, t: 0 }, { r: '150K-200K', s: 3.64, l: 0, t: 0 }, { r: '200K-350K', s: 7.83, l: 0, t: 0 }, { r: '350K-500K', s: 1.81, l: 0, t: 0 }, { r: '500K-750K', s: 1.11, l: 0, t: 0 }, { r: '750K-1M', s: 0.38, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.24, l: 0, t: 0 }, { r: '1.5M-2M', s: 0.15, l: 0, t: 0 }],
    prod: [
      { n: 'Hộp 60 bút màu Acrylic Marker (BinBon)', sc: 'all', br: 'OEM/Khác', ch: 'tiktok', pr: '68K', fm: 'Set 60', rv: '3.0 Tỷ', g: '-43%', us: '43.9K', ug: '-46%', re: '13,679', tr: '11.8 Tỷ', tu: '182.5K', url: 'https://www.tiktok.com/view/product/1730750363609630947' },
      { n: 'Hộp Bút Chì Màu Gốc Dầu Global Art', sc: 'all', br: 'Global Art', ch: 'tiktok', pr: '315K', fm: 'Dầu', rv: '1.1 Tỷ', g: '+53%', us: '3.5K', ug: '+31%', re: '1,221', tr: '3.0 Tỷ', tu: '11.0K', url: 'https://www.tiktok.com/view/product/1730350149081336202' },
      { n: 'Bút sáp màu lụa JUPIEARTH', sc: 'all', br: 'JUPIEARTH', ch: 'tiktok', pr: '89K', fm: 'Lụa', rv: '782.9 Tr', g: '+152%', us: '8.8K', ug: '+77%', re: '1,418', tr: '1.6 Tỷ', tu: '20.8K', url: 'https://www.tiktok.com/view/product/1731970909916859173' },
      { n: 'Bút Màu Dạ 120 Màu Marker Acrylic', sc: 'all', br: 'Bossee', ch: 'shopee', pr: '38K', fm: '120 Colors', rv: '668.7 Tr', g: '-29%', us: '17.7K', ug: '-29%', re: '9,991', tr: '1.8 Tỷ', tu: '48.5K', url: 'https://shopee.vn/product/1437074218/42500627746' },
      { n: 'Hộp 60 bút màu Acrylic (Gấu xoăn)', sc: 'all', br: 'OEM/Khác', ch: 'tiktok', pr: '72K', fm: 'Set 60', rv: '664.2 Tr', g: '+118%', us: '9.3K', ug: '+98%', re: '2,631', tr: '1.7 Tỷ', tu: '25.3K', url: 'https://www.tiktok.com/view/product/1730998624837732431' },
      { n: 'Bút Màu Sáp Vặn Hữu Cơ ClassMate', sc: 'all', br: 'ClassMate', ch: 'tiktok', pr: '38K', fm: 'Hữu cơ', rv: '585.6 Tr', g: '+14%', us: '15.5K', ug: '+8%', re: '2.128', tr: '1.1 Tỷ', tu: '31.0K', url: 'https://www.tiktok.com/view/product/1732744932751476069' },
      { n: 'Hộp 60 Bút Màu Acrylic Make', sc: 'all', br: 'OEM/Khác', ch: 'tiktok', pr: '58K', fm: 'Set 60', rv: '550.4 Tr', g: '-4%', us: '9.5K', ug: '-2%', re: '2,301', tr: '1.7 Tỷ', tu: '30.0K', url: 'https://www.tiktok.com/view/product/1730557972311673383' },
      { n: 'Tặng Bộ 12 bút chì màu 5000 hình', sc: 'all', br: 'OEM/Khác', ch: 'tiktok', pr: '50K', fm: 'Set 12', rv: '519.6 Tr', g: '-21%', us: '10.3K', ug: '-27%', re: '5,998', tr: '4.4 Tỷ', tu: '93.2K', url: 'https://www.tiktok.com/view/product/1729732248230595147' },
      { n: 'Bút Chì Màu Gốc Dầu Hộp Thiếc Global Art', sc: 'all', br: 'Global Art', ch: 'shopee', pr: '235K', fm: 'Hộp thiếc', rv: '511.2 Tr', g: '-22%', us: '2.2K', ug: '-18%', re: '3,077', tr: '2.3 Tỷ', tu: '10.9K', url: 'https://shopee.vn/product/1224175038/26150549051' },
      { n: 'Bút Sơn Màu Acrylic Maker Roller Deli', sc: 'all', br: 'Deli', ch: 'tiktok', pr: '325K', fm: 'Acrylic', rv: '461.9 Tr', g: '-6%', us: '1.4K', ug: '-46%', re: '843', tr: '1.3 Tỷ', tu: '9.3K', url: 'https://www.tiktok.com/view/product/1731288240825665151' }
    ],
    sdata: {
      sap_mau: {
        kpi: [{ l: 'Gross Sales (VND)', v: '3.3', u: 'Tỷ', g: '+13%', sub: 'vs 2.9 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '103.3', u: 'Nghìn', g: '-6%', sub: 'vs 109.7 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '39.4%', u: '', g: '-2.5pp', sub: 'vs 41.9% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '800', u: '', g: '-14%', sub: 'vs 931 in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '3.3', u: 'Tỷ', g: '+13%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~44.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '39.4%', u: '', g: '-2.5pp', sub: 'vs 41.9% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Jupitearth (23.7%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 2.0, pre: 1.43, c: '#f97316' }, { n: 'TikTok Shop', cur: 1.3, pre: 1.39, c: '#0f172a' }, { n: 'Lazada', cur: 0.0282, pre: 0.117, c: '#3b82f6' }, { n: 'Tiki', cur: 0.000195, pre: 0.0016, c: '#1a94ff' }],
        brand: [{ n: 'Jupitearth', cur: 23.7, pre: 0, c: '#3b82f6' }, { n: 'Colokit', cur: 19.0, pre: 13.3, c: '#fbbf24' }, { n: 'Deli', cur: 11.6, pre: 11.3, c: '#ef4444' }, { n: 'Classmate', cur: 3.2, pre: 0.7, c: '#ec4899' }, { n: 'Mideer', cur: 2.5, pre: 1.8, c: '#06b6d4' }, { n: 'Others', cur: 40.0, pre: 72.9, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.090, l: 0, t: 0 }, { r: '10K-30K', s: 1.085, l: 0, t: 0 }, { r: '30K-50K', s: 0.476, l: 0, t: 0 }, { r: '50K-75K', s: 0.309, l: 0, t: 0 }, { r: '75K-100K', s: 0.882, l: 0, t: 0 }, { r: '100K-150K', s: 0.098, l: 0, t: 0 }, { r: '150K-200K', s: 0.107, l: 0, t: 0 }, { r: '200K-350K', s: 0.096, l: 0, t: 0 }, { r: '350K-500K', s: 0.072, l: 0, t: 0 }, { r: '500K-750K', s: 0.042, l: 0, t: 0 }],
        prod: [
          { n: 'Bút sáp màu lụa JUPIEARTH', sc: 'sap_mau', br: 'Jupitearth', ch: 'tiktok', pr: '89K', fm: 'Lụa', rv: '782.9 Tr', g: '+152%', us: '8.8K', ug: '+77%', re: '1,418', tr: '1.6 Tỷ', tu: '20.8K', url: 'https://www.tiktok.com/view/product/1731970909916859173' },
          { n: 'Bút sáp màu Colokit 24 màu tươi sáng', sc: 'sap_mau', br: 'Colokit', ch: 'shopee', pr: '35K', fm: '24 Colors', rv: '160.4 Tr', g: '-1%', us: '5.9K', ug: '-1%', re: '9,445', tr: '1.5 Tỷ', tu: '62.0K', url: 'https://shopee.vn/product/101480242/1636049426' },
          { n: 'Sáp màu Colokit 10-36 màu mịn tươi', sc: 'sap_mau', br: 'Colokit', ch: 'shopee', pr: '18K', fm: '10-36 Colors', rv: '128.8 Tr', g: '-7%', us: '7.2K', ug: '-7%', re: '5,164', tr: '912.9 Tr', tu: '72.8K', url: 'https://shopee.vn/product/101480242/1636049068' },
          { n: 'Bút Sáp Màu Colokit Doraemon', sc: 'sap_mau', br: 'Colokit', ch: 'shopee', pr: '22K', fm: 'Doraemon', rv: '106.4 Tr', g: '-53%', us: '5.2K', ug: '-54%', re: '7,958', tr: '990.0 Tr', tu: '53.1K', url: 'https://shopee.vn/product/101480242/1636049269' },
          { n: 'Bút sáp màu hữu cơ gấu con Deli', sc: 'sap_mau', br: 'Deli', ch: 'shopee', pr: '65K', fm: 'Hữu cơ', rv: '82.4 Tr', g: '-10%', us: '1.3K', ug: '-13%', re: '2,150', tr: '602.8 Tr', tu: '12.8K', url: 'https://shopee.vn/product/127805122/22270856739' },
          { n: 'Bút Sáp Màu Lụa Vặn Kiêm Màu Nước', sc: 'sap_mau', br: 'OEM/Khác', ch: 'shopee', pr: '105K', fm: 'Vặn', rv: '61.6 Tr', g: '+4%', us: '593', ug: '+5%', re: '317', tr: '179.3 Tr', tu: '1.9K', url: 'https://shopee.vn/product/51635805/27281707163' },
          { n: 'Bút Sáp Màu Sáng Tạo Đa Năng', sc: 'sap_mau', br: 'OEM/Khác', ch: 'tiktok', pr: '52K', fm: 'Đa năng', rv: '56.6 Tr', g: '-59%', us: '1.1K', ug: '-60%', re: '182', tr: '206.8 Tr', tu: '4.1K', url: 'https://www.tiktok.com/view/product/1732521901834274164' },
          { n: 'Bút sáp màu Baby Color 12 màu Nhật', sc: 'sap_mau', br: 'Baby Color', ch: 'shopee', pr: '435K', fm: '12 Colors', rv: '47.1 Tr', g: '+49%', us: '108', ug: '+33%', re: '44', tr: '109.3 Tr', tu: '315', url: 'https://shopee.vn/product/63074404/1059385462' },
          { n: 'Bút Sáp Màu Hữu Cơ tự nhiên dễ thương', sc: 'sap_mau', br: 'OEM/Khác', ch: 'tiktok', pr: '35K', fm: 'Hữu cơ', rv: '46.2 Tr', g: '-75%', us: '1.3K', ug: '-78%', re: '997', tr: '368.5 Tr', tu: '12.4K', url: 'https://www.tiktok.com/view/product/1729602424186768231' },
          { n: 'Bút Sáp Màu Hữu Cơ Cute Deli', sc: 'sap_mau', br: 'Deli', ch: 'shopee', pr: '62K', fm: 'Hữu cơ', rv: '40.5 Tr', g: '+5%', us: '651', ug: '+7%', re: '1,442', tr: '370.3 Tr', tu: '8.0K', url: 'https://shopee.vn/product/348955539/23658963786' }
        ]
      },
      acrylic: {
        kpi: [{ l: 'Gross Sales (VND)', v: '18.8', u: 'Tỷ', g: '+29%', sub: 'vs 14.6 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '358.5', u: 'Nghìn', g: '-16%', sub: 'vs 425.4 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '45.7%', u: '', g: '+1.2pp', sub: 'vs 44.5% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.7', u: 'Nghìn', g: '-14%', sub: 'vs 1.9 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '18.8', u: 'Tỷ', g: '+29%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~36.4%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '45.7%', u: '', g: '+1.2pp', sub: 'vs 44.5% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (45.6%)', u: '', g: '', sub: '4/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 10.0, pre: 7.4, c: '#f97316' }, { n: 'TikTok Shop', cur: 8.6, pre: 6.5, c: '#0f172a' }, { n: 'Lazada', cur: 0.212, pre: 0.642, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0052, pre: 0.0305, c: '#1a94ff' }],
        brand: [{ n: 'Deli', cur: 45.6, pre: 21, c: '#ef4444' }, { n: 'Bossee', cur: 23.1, pre: 2, c: '#f97316' }, { n: 'Colokit', cur: 8.8, pre: 3.5, c: '#fbbf24' }, { n: 'Enmy', cur: 6.8, pre: 0, c: '#84cc16' }, { n: 'Smartkids', cur: 3.7, pre: 4.6, c: '#f43f5e' }, { n: 'Others', cur: 12.0, pre: 68.9, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.318, l: 0, t: 0 }, { r: '10K-30K', s: 2.296, l: 0, t: 0 }, { r: '30K-50K', s: 3.632, l: 0, t: 0 }, { r: '50K-75K', s: 5.788, l: 0, t: 0 }, { r: '75K-100K', s: 1.644, l: 0, t: 0 }, { r: '100K-150K', s: 1.179, l: 0, t: 0 }, { r: '150K-200K', s: 0.934, l: 0, t: 0 }, { r: '200K-350K', s: 2.460, l: 0, t: 0 }, { r: '350K-500K', s: 0.193, l: 0, t: 0 }, { r: '500K-750K', s: 0.150, l: 0, t: 0 }, { r: '750K-1M', s: 0.084, l: 0, t: 0 }, { r: '1M-1.5M', s: 0.110, l: 0, t: 0 }],
        prod: [
          { n: 'Hộp 60 bút màu Acrylic Marker (BinBon)', sc: 'acrylic', br: 'OEM/Khác', ch: 'tiktok', pr: '65K', fm: 'Set 60', rv: '3.0 Tỷ', g: '-43%', us: '43.9K', ug: '-46%', re: '13,679', tr: '11.8 Tỷ', tu: '182.5K', url: 'https://www.tiktok.com/view/product/1730750363609630947' },
          { n: 'Bút Màu Dạ 120 Màu Marker Acrylic', sc: 'acrylic', br: 'Bossee', ch: 'shopee', pr: '37K', fm: '120 Colors', rv: '668.7 Tr', g: '-29%', us: '17.7K', ug: '-29%', re: '9,991', tr: '1.8 Tỷ', tu: '48.5K', url: 'https://shopee.vn/product/1437074218/42500627746' },
          { n: 'Hộp 60 bút màu Acrylic (Gấu xoăn)', sc: 'acrylic', br: 'OEM/Khác', ch: 'tiktok', pr: '65K', fm: 'Set 60', rv: '664.2 Tr', g: '+118%', us: '9.3K', ug: '+98%', re: '2,631', tr: '1.7 Tỷ', tu: '25.3K', url: 'https://www.tiktok.com/view/product/1730998624837732431' },
          { n: 'Bút Sơn Màu Acrylic Roller Deli (Bản mới)', sc: 'acrylic', br: 'Deli', ch: 'tiktok', pr: '299K', fm: 'Roller', rv: '461.9 Tr', g: '-6%', us: '1.4K', ug: '-46%', re: '843', tr: '1.3 Tỷ', tu: '9.3K', url: 'https://www.tiktok.com/view/product/1731288240825665151' },
          { n: 'Chính hãng Bút Sơn Acrylic Deli 84 màu', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '285K', fm: '84 Colors', rv: '444.7 Tr', g: '-29%', us: '1.5K', ug: '-51%', re: '7,500', tr: '1.6 Tỷ', tu: '7.5K', url: 'https://shopee.vn/product/127805122/28935215038' },
          { n: 'Bút Màu Acrylic Marker 12-60 màu', sc: 'acrylic', br: 'Smartkids', ch: 'shopee', pr: '29K', fm: '12-60 Colors', rv: '254.5 Tr', g: '-17%', us: '8.0K', ug: '-28%', re: '110,340', tr: '3.0 Tỷ', tu: '110.3K', url: 'https://shopee.vn/product/807547610/25808745119' },
          { n: 'Bút Màu Acrylic Đầu Lông Mềm', sc: 'acrylic', br: 'Bossee', ch: 'tiktok', pr: '85K', fm: 'Lông mềm', rv: '253.2 Tr', g: '-1%', us: '2.9K', ug: '-26%', re: '7,321', tr: '532.1 Tr', tu: '7.3K', url: 'https://www.tiktok.com/view/product/1732304016722593668' },
          { n: 'Hộp 80 màu Acrylic Marker Deli (Live)', sc: 'acrylic', br: 'Deli', ch: 'tiktok', pr: '149K', fm: 'Set 80', rv: '252.9 Tr', g: '-24%', us: '1.5K', ug: '-30%', re: '5,555', tr: '972.2 Tr', tu: '5.5K', url: 'https://www.tiktok.com/view/product/1731117528939268735' },
          { n: 'Mã 40K LIVE Bút Sơn Acrylic Deli', sc: 'acrylic', br: 'Deli', ch: 'shopee', pr: '40K', fm: 'Acrylic', rv: '234.6 Tr', g: '+129%', us: '5.6K', ug: '-30%', re: '83,900', tr: '1.3 Tỷ', tu: '83.9K', url: 'https://shopee.vn/product/348955539/25215129183' },
          { n: 'Tặng 2 4 6 màu Acrylic Markers Colokit', sc: 'acrylic', br: 'Colokit', ch: 'shopee', pr: '48.5K', fm: 'Acrylic', rv: '210.9 Tr', g: '-27%', us: '4.4K', ug: '-23%', re: '10,879', tr: '531.3 Tr', tu: '10.8K', url: 'https://shopee.vn/product/101480242/44467560697' }
        ],
      },
      long_mt: {
        kpi: [{ l: 'Gross Sales (VND)', v: '3.0', u: 'Tỷ', g: '+33%', sub: 'vs 2.3 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '58.5', u: 'Nghìn', g: '+26%', sub: 'vs 46.5 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '43.3%', u: '', g: '+13.9pp', sub: 'vs 29.4% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '386', u: '', g: '-19%', sub: 'vs 479 in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '3.0', u: 'Tỷ', g: '+33%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~54.6%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '43.3%', u: '', g: '+13.9pp', sub: 'vs 29.4% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Colokit (73.6%)', u: '', g: '', sub: '8/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 1.7, pre: 1.53, c: '#f97316' }, { n: 'TikTok Shop', cur: 1.3, pre: 0.677, c: '#0f172a' }, { n: 'Lazada', cur: 0.0191, pre: 0.070, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0006, pre: 0.002, c: '#1a94ff' }],
        brand: [{ n: 'Colokit', cur: 73.6, pre: 81.1, c: '#fbbf24' }, { n: 'Deli', cur: 5.8, pre: 2.2, c: '#ef4444' }, { n: 'Enmy', cur: 2.9, pre: 0, c: '#84cc16' }, { n: 'Bossee', cur: 1.2, pre: 0, c: '#f97316' }, { n: 'Classmate', cur: 1.0, pre: 0.5, c: '#ec4899' }, { n: 'Others', cur: 15.5, pre: 16.2, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 0.369, l: 0, t: 0 }, { r: '30K-50K', s: 1.245, l: 0, t: 0 }, { r: '50K-75K', s: 0.392, l: 0, t: 0 }, { r: '75K-100K', s: 0.267, l: 0, t: 0 }, { r: '100K-150K', s: 0.452, l: 0, t: 0 }, { r: '150K-200K', s: 0.139, l: 0, t: 0 }, { r: '200K-350K', s: 0.142, l: 0, t: 0 }],
        prod: [
          { n: 'Bút lông Fiber Pen Morandi (Mã 1)', sc: 'long_mt', br: 'Thiên Long', ch: 'tiktok', pr: '35K', fm: 'Morandi', rv: '431.7 Tr', g: '-25%', us: '9.0K', ug: '-46%', re: '3,865', tr: '1.2 Tỷ', tu: '35.4K', url: 'https://www.tiktok.com/view/product/1732234717911157753' },
          { n: 'Hộp Bút Lông 48 60 Màu Washable (Mã 1)', sc: 'long_mt', br: 'Thiên Long', ch: 'tiktok', pr: '125K', fm: 'Washable', rv: '287.1 Tr', g: '+310%', us: '1.8K', ug: '+256%', re: '283', tr: '366.0 Tr', tu: '2.4K', url: 'https://www.tiktok.com/view/product/1732761890580236281' },
          { n: 'Bút lông Fiber Pen Colokit (Có thể rửa)', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '48K', fm: 'Fiber Pen', rv: '163.0 Tr', g: '-20%', us: '3.8K', ug: '-14%', re: '30,740', tr: '4.8 Tỷ', tu: '97.2K', url: 'https://shopee.vn/product/101480242/8327433608' },
          { n: 'Bút lông Fiber Pen Morandi (Mã 2)', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '35K', fm: 'Morandi', rv: '155.4 Tr', g: '-17%', us: '6.7K', ug: '+3%', re: '5,785', tr: '625.0 Tr', tu: '23.4K', url: 'https://shopee.vn/product/101480242/29931655506' },
          { n: 'Bộ Bút Lông 20 36 Màu Rửa Được', sc: 'long_mt', br: 'Thiên Long', ch: 'tiktok', pr: '65K', fm: 'Washable', rv: '140.6 Tr', g: '-38%', us: '2.6K', ug: '-45%', re: '1,352', tr: '585.5 Tr', tu: '12.3K', url: 'https://www.tiktok.com/view/product/1729549833724529657' },
          { n: 'Bút lông màu Acrylic Markers 2 đầu', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '185K', fm: 'Acrylic', rv: '102.3 Tr', g: '-36%', us: '1.1K', ug: '-44%', re: '2,238', tr: '866.1 Tr', tu: '10.0K', url: 'https://shopee.vn/product/101480242/29703771630' },
          { n: 'Bút lông màu Felt Pen Deli', sc: 'long_mt', br: 'Deli', ch: 'tiktok', pr: '45K', fm: 'Felt Pen', rv: '95.7 Tr', g: '-26%', us: '1.8K', ug: '-33%', re: '1,065', tr: '441.9 Tr', tu: '8.7K', url: 'https://www.tiktok.com/view/product/1731283592261502591' },
          { n: 'Hộp Bút Lông 48 60 Màu Washable (Mã 2)', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '125K', fm: 'Washable', rv: '93.2 Tr', g: '+600%', us: '601', ug: '+615%', re: '189', tr: '106.5 Tr', tu: '685', url: 'https://shopee.vn/product/101480242/40172986410' },
          { n: 'COD ENMY Enmy Acrylic Bút Lông', sc: 'long_mt', br: 'Enmy', ch: 'shopee', pr: '245K', fm: 'Acrylic', rv: '86.6 Tr', g: '+135%', us: '334', ug: '+115%', re: '130', tr: '148.2 Tr', tu: '609', url: 'https://shopee.vn/product/1530752783/43860217946' },
          { n: 'Bút lông màu Fiber Pen Colokit 20 36', sc: 'long_mt', br: 'Thiên Long', ch: 'shopee', pr: '42K', fm: 'Fiber Pen', rv: '82.6 Tr', g: '-17%', us: '1.6K', ug: '-20%', re: '9,549', tr: '1.4 Tỷ', tu: '29.0K', url: 'https://shopee.vn/product/368671137/21176193704' }
        ]
      },
      chi_mau: {
        kpi: [{ l: 'Gross Sales (VND)', v: '6.7', u: 'Tỷ', g: '+47%', sub: 'vs 4.5 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '89.0', u: 'Nghìn', g: '0%', sub: 'vs 89.4 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '44.8%', u: '', g: '+14.4pp', sub: 'vs 30.4% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '968', u: '', g: '+2%', sub: 'vs 950 in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '6.7', u: 'Tỷ', g: '+47%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~47.0%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '44.8%', u: '', g: '+14.4pp', sub: 'vs 30.4% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Global Art (41.7%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 3.6, pre: 2.98, c: '#f97316' }, { n: 'TikTok Shop', cur: 3.0, pre: 1.37, c: '#0f172a' }, { n: 'Lazada', cur: 0.0499, pre: 0.161, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0026, pre: 0.012, c: '#1a94ff' }],
        brand: [{ n: 'Global Art', cur: 41.7, pre: 8.9, c: '#10b981' }, { n: 'Deli', cur: 39.4, pre: 48.2, c: '#ef4444' }, { n: 'Gia Hưng', cur: 7.5, pre: 2.5, c: '#a855f7' }, { n: 'Finenolo', cur: 3.5, pre: 7.1, c: '#6366f1' }, { n: 'Colokit', cur: 2.6, pre: 0.9, c: '#fbbf24' }, { n: 'Others', cur: 5.3, pre: 32.4, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.129, l: 0, t: 0 }, { r: '10K-30K', s: 0.712, l: 0, t: 0 }, { r: '30K-50K', s: 0.514, l: 0, t: 0 }, { r: '50K-75K', s: 0.450, l: 0, t: 0 }, { r: '75K-100K', s: 0.340, l: 0, t: 0 }, { r: '100K-150K', s: 1.061, l: 0, t: 0 }, { r: '150K-200K', s: 0.834, l: 0, t: 0 }, { r: '200K-350K', s: 2.396, l: 0, t: 0 }, { r: '350K-500K', s: 0.106, l: 0, t: 0 }, { r: '500K-750K', s: 0.073, l: 0, t: 0 }],
        prod: [
          { n: 'Hộp Bút Chì Màu Gốc Dầu Global Art (Mã 1)', sc: 'chi_mau', br: 'Global Art', ch: 'tiktok', pr: '318K', fm: 'Gốc dầu', rv: '1.1 Tỷ', g: '+53%', us: '3.5K', ug: '+31%', re: '1,221', tr: '3.0 Tỷ', tu: '11.0K', url: 'https://www.tiktok.com/view/product/1730350149081336202' },
          { n: 'Bút Chì Màu Gốc Dầu Global Art (Hộp thiếc)', sc: 'chi_mau', br: 'Global Art', ch: 'shopee', pr: '250K', fm: 'Hộp thiếc', rv: '511.2 Tr', g: '-22%', us: '2.2K', ug: '-18%', re: '3,077', tr: '2.3 Tỷ', tu: '10.9K', url: 'https://shopee.vn/product/1224175038/26150549051' },
          { n: 'Bút Chì Màu Gốc Dầu Gốc Nước Deli', sc: 'chi_mau', br: 'Deli', ch: 'shopee', pr: '118K', fm: 'Dầu/Nước', rv: '251.4 Tr', g: '-18%', us: '1.7K', ug: '-15%', re: '3,771', tr: '2.0 Tỷ', tu: '15.3K', url: 'https://shopee.vn/product/348955539/15498058138' },
          { n: 'Bộ Bút chì màu Finenolo x Deli (Tặng quà)', sc: 'chi_mau', br: 'Finenolo', ch: 'shopee', pr: '189K', fm: 'Set', rv: '239.4 Tr', g: '-13%', us: '1.2K', ug: '-30%', re: '1,837', tr: '1.2 Tỷ', tu: '15.4K', url: 'https://www.tiktok.com/view/product/1729561816511187583' },
          { n: 'Bộ Bút Chì Màu Sáp 48-120 Màu Gia Hưng', sc: 'chi_mau', br: 'Gia Hưng', ch: 'tiktok', pr: '151K', fm: 'Sáp', rv: '194.3 Tr', g: '+229%', us: '1.2K', ug: '+229%', re: '731', tr: '587.4 Tr', tu: '4.6K', url: 'https://www.tiktok.com/view/product/1729607695017478457' },
          { n: 'Bút Chì Màu Gốc Dầu Finenolo (Giảm 31K)', sc: 'chi_mau', br: 'Finenolo', ch: 'shopee', pr: '96K', fm: 'Gốc dầu', rv: '176.0 Tr', g: '+7%', us: '1.5K', ug: '+14%', re: '4,215', tr: '1.8 Tỷ', tu: '14.9K', url: 'https://shopee.vn/product/884990462/16597346699' },
          { n: 'Bút Chì Màu Gốc Dầu Global Art (Mã 2)', sc: 'chi_mau', br: 'Global Art', ch: 'tiktok', pr: '253K', fm: 'Gốc dầu', rv: '174.5 Tr', g: '+333%', us: '735', ug: '+318%', re: '211', tr: '214.8 Tr', tu: '911', url: 'https://shopee.vn/product/1647865670/27642641820' },
          { n: '72 MÀU Bút Chì Màu Gốc Dầu Deli', sc: 'chi_mau', br: 'Deli', ch: 'shopee', pr: '107K', fm: '72 Màu', rv: '160.2 Tr', g: '-20%', us: '1.1K', ug: '-4%', re: '2,951', tr: '1.4 Tỷ', tu: '10.4K', url: 'https://shopee.vn/product/127805122/23000300409' },
          { n: 'Bộ Bút Chì Màu 48-120 Cây Gia Hưng', sc: 'chi_mau', br: 'Gia Hưng', ch: 'tiktok', pr: '151K', fm: 'Set', rv: '128.8 Tr', g: '+140%', us: '785', ug: '+121%', re: '240', tr: '283.8 Tr', tu: '1.8K', url: 'https://www.tiktok.com/view/product/1732247417957681885' },
          { n: 'Bút Chì Màu Gốc Dầu Gốc Nước Deli (TOP 1)', sc: 'chi_mau', br: 'Deli', ch: 'shopee', pr: '129K', fm: 'TOP 1', rv: '110.6 Tr', g: '-38%', us: '720', ug: '-40%', re: '15,912', tr: '4.7 Tỷ', tu: '41.2K', url: 'https://shopee.vn/product/127805122/4531417577' }
        ]
      }
    }
  },
  van_phong_pham: {
    n: 'Văn Phòng Phẩm', i: '📎',
    sc: [{ k: 'all', n: 'Tất cả', i: '📊' }, { k: 'da_quang', n: 'Bút Dạ Quang', i: '🔆' }, { k: 'long_bang', n: 'Bút Lông Bảng', i: '📝' }, { k: 'long_dau', n: 'Bút Lông Dầu', i: '🖍️' }, { k: 'xoa_nuoc', n: 'Bút Xóa Nước', i: '🖋️' }, { k: 'file_folder', n: 'File & Folder', i: '📂' }, { k: 'giay_copy', n: 'Giấy Photocopy', i: '📄' }],
    kpi: [{ l: 'Gross Sales (VND)', v: '135.9', u: 'Tỷ', g: '+49%', sub: 'vs 91.2 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '3.3', u: 'Triệu', g: '-11%', sub: 'vs 3.7 triệu in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '27.8%', u: '', g: '+7.3pp', sub: 'vs 20.5% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '11.7', u: 'Nghìn', g: '-5%', sub: 'vs 12.3 nghìn in Q1 2025', ic: 'orange' }],
    dkpi: [{ l: 'Gross Sales (VND)', v: '135.9', u: 'Tỷ', g: '+49%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~11.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '27.8%', u: '', g: '+7.3pp', sub: 'vs 20.5% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Ik Copy (11.8%)', u: '', g: '', sub: '5/10 Top SKU Spots', ic: 'orange' }],
    plat: [{ n: 'Shopee', cur: 96.6, pre: 68.5, c: '#f97316' }, { n: 'TikTok Shop', cur: 37.8, pre: 18.7, c: '#0f172a' }, { n: 'Lazada', cur: 1.5, pre: 3.95, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0682, pre: 0.158, c: '#1a94ff' }],
    brand: [{ n: 'Ik Copy', cur: 11.8, pre: 8.0, c: '#3b82f6' }, { n: 'Deli', cur: 9.6, pre: 3.6, c: '#ef4444' }, { n: 'Thiên Long', cur: 5.5, pre: 4.0, c: '#1a56db' }, { n: 'Hồng Hà', cur: 2.9, pre: 0.1, c: '#10b981' }, { n: 'America Tape', cur: 1.2, pre: 1.5, c: '#f59e0b' }, { n: 'Others', cur: 69.0, pre: 82.8, c: '#cbd5e1' }],
    price: [{ r: '< 10K', s: 3.68, l: 0, t: 0 }, { r: '10K-30K', s: 26.57, l: 0, t: 0 }, { r: '30K-50K', s: 18.40, l: 0, t: 0 }, { r: '50K-75K', s: 14.92, l: 0, t: 0 }, { r: '75K-100K', s: 18.72, l: 0, t: 0 }, { r: '100K-150K', s: 10.12, l: 0, t: 0 }, { r: '150K-200K', s: 8.96, l: 0, t: 0 }, { r: '200K-350K', s: 7.44, l: 0, t: 0 }, { r: '350K-500K', s: 17.77, l: 0, t: 0 }, { r: '500K-750K', s: 4.82, l: 0, t: 0 }, { r: '750K-1.0M', s: 3.34, l: 0, t: 0 }, { r: '1.0M-1.5M', s: 0.43, l: 0, t: 0 }, { r: '1.5M-2.0M', s: 0.34, l: 0, t: 0 }, { r: '2M-3.5M', s: 0.31, l: 0, t: 0 }],
    prod: [
      { n: 'Combo 5 ream Giấy IK Copy 70gsm', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '408.5K', fm: '5 ream', rv: '2.5 Tỷ', g: '+7%', us: '6.8K', ug: '-1%', tr: '23.0 Tỷ', tu: '70.2K', re: '15,994', url: 'https://shopee.vn/product/101480242/16794017668' },
      { n: '10 ream Giấy A4 IK Copy 70gsm', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '817K', fm: '10 ream', rv: '1.8 Tỷ', g: '+14%', us: '2.3K', ug: '+6%', tr: '8.2 Tỷ', tu: '12.0K', re: '2,950', url: 'https://shopee.vn/product/101480242/10499808000' },
      { n: 'Băng Keo Trong Đục 4.8cm (Cây 6)', sc: 'all', br: 'OEM', ch: 'shopee', pr: '80K', fm: 'Cây 6', rv: '1.6 Tỷ', g: '-15%', us: '37.8K', ug: '-26%', tr: '18.4 Tỷ', tu: '440.2K', re: '28,254', url: 'https://shopee.vn/product/242520587/18320575698' },
      { n: 'Combo 10 ream Giấy IK Copy 80gsm', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '709K', fm: '10 ream', rv: '1.4 Tỷ', g: '+28%', us: '2.1K', ug: '+25%', tr: '4.6 Tỷ', tu: '6.9K', re: '1,505', url: 'https://shopee.vn/product/368671137/23940020482' },
      { n: 'Voucher Live Thùng 5-10 ream Giấy Deli', sc: 'all', br: 'Deli', ch: 'shopee', pr: '375K', fm: 'Thùng', rv: '1.3 Tỷ', g: '-53%', us: '3.7K', ug: '-60%', tr: '7.6 Tỷ', tu: '30.8K', re: '6,256', url: 'https://shopee.vn/product/127805122/29227911732' },
      { n: 'Combo 10 ream Giấy IK Copy 70gsm (MT)', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '725K', fm: '10 ream', rv: '1.2 Tỷ', g: '+145%', us: '1.7K', ug: '+128%', tr: '5.6 Tỷ', tu: '8.4K', re: '2,309', url: 'https://shopee.vn/product/367619913/23630511462' },
      { n: 'Mã 60K Live Combo 5 ream Giấy Deli', sc: 'all', br: 'Deli', ch: 'shopee', pr: '375K', fm: '5 ream', rv: '1.2 Tỷ', g: '-17%', us: '3.3K', ug: '-32%', tr: '4.6 Tỷ', tu: '18.3K', re: '3,473', url: 'https://shopee.vn/product/348955539/28678999911' },
      { n: 'Giấy A4 Deli - 500 tờ (Bán lẻ)', sc: 'all', br: 'Deli', ch: 'tiktok', pr: '75K', fm: '500 tờ', rv: '1.1 Tỷ', g: '+144%', us: '14.4K', ug: '+119%', tr: '2.5 Tỷ', tu: '34.0K', re: '1,945', url: 'https://www.tiktok.com/view/product/1731968576949684863' },
      { n: 'Combo 5 ream Giấy IK Copy Plus 80gsm', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '354K', fm: '5 ream', rv: '1.0 Tỷ', g: '-12%', us: '2.9K', ug: '-18%', tr: '9.0 Tỷ', tu: '27.7K', re: '6,548', url: 'https://shopee.vn/product/368671137/23228967167' },
      { n: 'Combo 5 ream Giấy IK Copy 80gsm (MT)', sc: 'all', br: 'IK Copy', ch: 'shopee', pr: '354K', fm: '5 ream', rv: '960.5 Tr', g: '+35%', us: '2.7K', ug: '+27%', tr: '9.8 Tỷ', tu: '30.5K', re: '7,798', url: 'https://shopee.vn/product/367619913/21772657261' }
    ],
    sdata: {
      da_quang: {
        kpi: [{ l: 'Gross Sales (VND)', v: '3.0', u: 'Tỷ', g: '+33%', sub: 'vs 2.3 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '149.3', u: 'Nghìn', g: '-29%', sub: 'vs 209.2 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '29.3%', u: '', g: '+11.5pp', sub: 'vs 17.8% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.1', u: 'Nghìn', g: '-19%', sub: 'vs 1.3 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '3.0', u: 'Tỷ', g: '+33%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~81.5%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '29.3%', u: '', g: '+11.5pp', sub: 'vs 17.8% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (16.3%)', u: '', g: '', sub: '3/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 2.1, pre: 1.81, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.8793, pre: 0.401, c: '#0f172a' }, { n: 'Lazada', cur: 0.0476, pre: 0.066, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0012, pre: 0.005, c: '#1a94ff' }],
        brand: [{ n: 'Deli', cur: 16.3, pre: 13.6, c: '#ef4444' }, { n: 'Bossee', cur: 10.0, pre: 0, c: '#f97316' }, { n: 'Thiên Long', cur: 9.5, pre: 6.3, c: '#1a56db' }, { n: 'Mcbooks', cur: 2.9, pre: 2.8, c: '#10b981' }, { n: 'Stabilo', cur: 1.5, pre: 1.8, c: '#8b5cf6' }, { n: 'Others', cur: 59.8, pre: 75.5, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.484, l: 0, t: 0 }, { r: '10K-30K', s: 1.014, l: 0, t: 0 }, { r: '30K-50K', s: 0.851, l: 0, t: 0 }, { r: '50K-75K', s: 0.389, l: 0, t: 0 }, { r: '75K-100K', s: 0.053, l: 0, t: 0 }, { r: '100K-150K', s: 0.167, l: 0, t: 0 }],
        prod: [
          { n: 'Bút Highlight Pastel đủ 6 màu (Mã 1)', sc: 'da_quang', br: 'Bossee', ch: 'tiktok', pr: '32K', fm: 'Pastel', rv: '215.0 Tr', g: '-1%', us: '6.7K', ug: '-13%', re: '1,132', tr: '472.0 Tr', tu: '16.0K', url: 'https://www.tiktok.com/view/product/1732230778223233811' },
          { n: 'Bút Nhũ Kim Tuyến Lấp Lánh 12 Màu', sc: 'da_quang', br: 'OEM/Khác', ch: 'tiktok', pr: '51K', fm: 'Set 12', rv: '119.4 Tr', g: '+530%', us: '2.2K', ug: '+448%', re: '85', tr: '154.5 Tr', tu: '2.9K', url: 'https://www.tiktok.com/view/product/1733191836290548787' },
          { n: 'Bút đánh dấu highlight bút nhớ (Mcbooks)', sc: 'da_quang', br: 'Mcbooks', ch: 'shopee', pr: '25K', fm: 'Mcbooks', rv: '82.6 Tr', g: '+53%', us: '3.3K', ug: '+83%', re: '23,559', tr: '1.0 Tỷ', tu: '83.4K', url: 'https://shopee.vn/product/272432350/12357840047' },
          { n: 'Full màu Bút Highlight Deli (Mã 1)', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '6K', fm: 'Deli', rv: '78.4 Tr', g: '-26%', us: '9.5K', ug: '-25%', re: '11,386', tr: '731.2 Tr', tu: '116.4K', url: 'https://shopee.vn/product/348955539/9286931469' },
          { n: 'Bút Highlight Deli 25 màu (Mã 2)', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '9K', fm: '25 màu', rv: '77.8 Tr', g: '-15%', us: '9.4K', ug: '-36%', re: '26,797', tr: '1.1 Tỷ', tu: '201.7K', url: 'https://shopee.vn/product/127805122/11115991321' },
          { n: 'Bút Highlight Pastel đủ 6 màu (Mã 2)', sc: 'da_quang', br: 'Bossee', ch: 'shopee', pr: '32K', fm: 'Pastel', rv: '57.5 Tr', g: '+98%', us: '1.9K', ug: '+81%', re: '752', tr: '111.8 Tr', tu: '4.5K', url: 'https://shopee.vn/product/1366221078/26317103425' },
          { n: 'Set 5 Bút Highlight 2 Đầu M.Y', sc: 'da_quang', br: 'OEM/Khác', ch: 'tiktok', pr: '29K', fm: 'Set 5', rv: '53.2 Tr', g: '+559%', us: '1.8K', ug: '+488%', re: '113', tr: '70.2 Tr', tu: '2.4K', url: 'https://www.tiktok.com/view/product/1732952252567618858' },
          { n: 'Một bút dạ quang tặng một sổ tay', sc: 'da_quang', br: 'OEM/Khác', ch: 'tiktok', pr: '125K', fm: 'Combo', rv: '51.1 Tr', g: '-25%', us: '387', ug: '-30%', re: '141', tr: '201.3 Tr', tu: '1.6K', url: 'https://www.tiktok.com/view/product/1731718202861782716' },
          { n: 'Bút highlight màu macaron Deli', sc: 'da_quang', br: 'Deli', ch: 'shopee', pr: '8K', fm: 'Macaron', rv: '40.2 Tr', g: '-1%', us: '4.9K', ug: '+2%', re: '4,177', tr: '233.8 Tr', tu: '35.6K', url: 'https://shopee.vn/product/127805122/24568758870' },
          { n: 'Set Bút Dạ Quang bút nhớ 4 màu', sc: 'da_quang', br: 'OEM/Khác', ch: 'shopee', pr: '20K', fm: 'Set 4', rv: '39.9 Tr', g: '-54%', us: '2.0K', ug: '-63%', re: '12,722', tr: '681.5 Tr', tu: '48.1K', url: 'https://shopee.vn/product/19717279/23914151150' }
        ]
      },
      long_dau: {
        kpi: [{ l: 'Gross Sales (VND)', v: '4.8', u: 'Tỷ', g: '+12%', sub: 'vs 4.3 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '137.1', u: 'Nghìn', g: '-39%', sub: 'vs 224.3 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '41.7%', u: '', g: '+21.2pp', sub: 'vs 20.5% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.1', u: 'Nghìn', g: '-9%', sub: 'vs 1.2 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '4.8', u: 'Tỷ', g: '+12%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~39.8%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '41.7%', u: '', g: '+21.2pp', sub: 'vs 20.5% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (33.3%)', u: '', g: '', sub: '6/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 2.7, pre: 2.39, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.0, pre: 1.67, c: '#0f172a' }, { n: 'Lazada', cur: 0.075, pre: 0.192, c: '#3b82f6' }, { n: 'Tiki', cur: 0.000288, pre: 0.0412, c: '#1a94ff' }],
        brand: [{ n: 'Thiên Long', cur: 33.3, pre: 22.2, c: '#1a56db' }, { n: 'Leyue', cur: 11.3, pre: 0, c: '#3b82f6' }, { n: 'G-Star', cur: 3.4, pre: 3.0, c: '#10b981' }, { n: 'Deli', cur: 1.6, pre: 1.7, c: '#ef4444' }, { n: 'Artline', cur: 1.2, pre: 2.1, c: '#8b5cf6' }, { n: 'Others', cur: 49.2, pre: 71.0, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.193, l: 0, t: 0 }, { r: '10K-30K', s: 0.861, l: 0, t: 0 }, { r: '30K-50K', s: 0.897, l: 0, t: 0 }, { r: '50K-75K', s: 1.811, l: 0, t: 0 }, { r: '75K-100K', s: 0.372, l: 0, t: 0 }, { r: '100K-150K', s: 0.445, l: 0, t: 0 }, { r: '150K-200K', s: 0.099, l: 0, t: 0 }, { r: '200K-350K', s: 0.070, l: 0, t: 0 }, { r: '350K-500K', s: 0.010, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 10 cây bút lông dầu trắng (DUC SHOP)', sc: 'long_dau', br: 'OEM/Khác', ch: 'tiktok', pr: '69K', fm: 'Combo 10', rv: '538.4 Tr', g: '—', us: '7.6K', ug: '—', re: '176', tr: '550.5 Tr', tu: '7.8K', url: 'https://www.tiktok.com/view/product/1733890170414531648' },
          { n: 'Combo 5-10-20 Thiên Long PM-04', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '51K', fm: 'PM-04', rv: '367.6 Tr', g: '+19%', us: '6.8K', ug: '+6%', re: '4,360', tr: '1.5 Tỷ', tu: '30.7K', url: 'https://shopee.vn/product/101480242/23576151442' },
          { n: 'Combo 5-10-20 Thiên Long PM-09', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '54K', fm: 'PM-09', rv: '248.1 Tr', g: '+35%', us: '4.4K', ug: '+22%', re: '2,404', tr: '958.1 Tr', tu: '18.0K', url: 'https://shopee.vn/product/101480242/22050668198' },
          { n: 'Combo 10 cây bút lông dầu trắng (Minh Tuấn)', sc: 'long_dau', br: 'OEM/Khác', ch: 'tiktok', pr: '64K', fm: 'Combo 10', rv: '185.3 Tr', g: '+2483%', us: '3.0K', ug: '+1558%', re: '134', tr: '210.9 Tr', tu: '3.5K', url: 'https://www.tiktok.com/view/product/1733562689888421193' },
          { n: 'Combo 3 hộp 30 chiếc bút lông dầu đầu kim', sc: 'long_dau', br: 'OEM/Khác', ch: 'tiktok', pr: '135K', fm: 'Combo 30', rv: '145.5 Tr', g: '-44%', us: '1.3K', ug: '-56%', re: '1,662', tr: '2.9 Tỷ', tu: '35.5K', url: 'https://www.tiktok.com/view/product/1730844958738057785' },
          { n: 'Combo 10-30-50 Thiên Long Đầu To', sc: 'long_dau', br: 'Thiên Long', ch: 'tiktok', pr: '55K', fm: 'PM-Lớn', rv: '119.4 Tr', g: '-61%', us: '2.3K', ug: '-66%', re: '546', tr: '616.0 Tr', tu: '13.5K', url: 'https://www.tiktok.com/view/product/1732144720901474385' },
          { n: 'Combo Bút lông dầu Thiên Long PM-04 (Lớn)', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '98K', fm: 'PM-04', rv: '108.2 Tr', g: '-41%', us: '1.1K', ug: '-40%', re: '1,430', tr: '1.2 Tỷ', tu: '14.0K', url: 'https://shopee.vn/product/368671137/13249566333' },
          { n: 'Combo 10 Bút lông dầu Thiên Long PM-09', sc: 'long_dau', br: 'Thiên Long', ch: 'shopee', pr: '109K', fm: 'PM-09', rv: '69.5 Tr', g: '-33%', us: '668', ug: '-28%', re: '356', tr: '393.5 Tr', tu: '4.0K', url: 'https://shopee.vn/product/367619913/15701574737' },
          { n: 'Bút Lông Dầu Không Phai (Bán lẻ)', sc: 'long_dau', br: 'OEM/Khác', ch: 'tiktok', pr: '7K', fm: 'Lẻ', rv: '65.2 Tr', g: '-24%', us: '8.6K', ug: '-56%', re: '2,931', tr: '170.7 Tr', tu: '34.4K', url: 'https://www.tiktok.com/view/product/1731889030779405591' },
          { n: 'Combo 30-50 Bút Lông Dầu TL Đầu Kim', sc: 'long_dau', br: 'Thiên Long', ch: 'tiktok', pr: '150K', fm: 'PM-Kim', rv: '64.1 Tr', g: '-18%', us: '506', ug: '-41%', re: '128', tr: '241.6 Tr', tu: '2.5K', url: 'https://www.tiktok.com/view/product/1732146962376591441' }
        ]
      },
      long_bang: {
        kpi: [{ l: 'Gross Sales (VND)', v: '3.1', u: 'Tỷ', g: '+31%', sub: 'vs 2.4 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '106.5', u: 'Nghìn', g: '-40%', sub: 'vs 177.9 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '13.6%', u: '', g: '+3.4pp', sub: 'vs 10.2% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '619', u: '', g: '-19%', sub: 'vs 760 in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '3.1', u: 'Tỷ', g: '+31%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~41.1%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '13.6%', u: '', g: '+3.4pp', sub: 'vs 10.2% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (58.1%)', u: '', g: '', sub: '9/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 2.6, pre: 1.94, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.421, pre: 0.24, c: '#0f172a' }, { n: 'Lazada', cur: 0.0696, pre: 0.174, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0024, pre: 0.004, c: '#1a94ff' }],
        brand: [{ n: 'Thiên Long', cur: 58.1, pre: 49.8, c: '#1a56db' }, { n: 'Deli', cur: 6.3, pre: 11.4, c: '#ef4444' }, { n: 'Gxin', cur: 1.7, pre: 0, c: '#10b981' }, { n: 'Thiên An', cur: 1.5, pre: 1.1, c: '#8b5cf6' }, { n: 'Adiva', cur: 1.1, pre: 0, c: '#f59e0b' }, { n: 'Others', cur: 31.3, pre: 37.7, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.165, l: 0, t: 0 }, { r: '10K-30K', s: 0.712, l: 0, t: 0 }, { r: '30K-50K', s: 1.021, l: 0, t: 0 }, { r: '50K-75K', s: 0.270, l: 0, t: 0 }, { r: '75K-100K', s: 0.553, l: 0, t: 0 }, { r: '100K-150K', s: 0.177, l: 0, t: 0 }, { r: '150K-200K', s: 0.070, l: 0, t: 0 }, { r: '200K-350K', s: 0.070, l: 0, t: 0 }],
        prod: [
          { n: 'Combo Bút lông bảng Thiên Long WB-03', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '81K', fm: 'Combo', rv: '334.0 Tr', g: '+81%', us: '4.5K', ug: '+104%', re: '1,825', tr: '1.2 Tỷ', tu: '16.9K', url: 'https://shopee.vn/product/368671137/5576960676' },
          { n: 'Combo 5-10-20 Bút lông bảng WB-03 (Xanh Đỏ)', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '35K', fm: 'WB-03', rv: '261.0 Tr', g: '+10%', us: '6.2K', ug: '+6%', re: '4,030', tr: '1.1 Tỷ', tu: '27.9K', url: 'https://shopee.vn/product/101480242/23576151446' },
          { n: 'Bút lông bảng Hoshi Thiên Long WB-025', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '13K', fm: 'WB-025', rv: '170.8 Tr', g: '-39%', us: '12.8K', ug: '-36%', re: '6,593', tr: '838.9 Tr', tu: '64.0K', url: 'https://shopee.vn/product/101480242/29970555826' },
          { n: 'Combo 5-10-20 Bút dạ viết bảng WB-03', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '40K', fm: 'WB-03', rv: '157.6 Tr', g: '-39%', us: '3.8K', ug: '-42%', re: '5,313', tr: '2.5 Tỷ', tu: '46.0K', url: 'https://shopee.vn/product/367619913/15326547530' },
          { n: 'Combo 5-10-20 Flexoffice FO-WB02', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '36K', fm: 'FO-WB02', rv: '84.0 Tr', g: '+87%', us: '1.9K', ug: '+41%', re: '842', tr: '225.4 Tr', tu: '7.1K', url: 'https://shopee.vn/product/101480242/22347224257' },
          { n: 'Hộp 10 Bút lông bảng WB-03 (Lẻ thùng)', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '91K', fm: 'Hộp 10', rv: '59.5 Tr', g: '-51%', us: '662', ug: '-54%', re: '1,732', tr: '979.7 Tr', tu: '12.4K', url: 'https://shopee.vn/product/101480242/1673217775' },
          { n: 'Bút lông bảng xóa được Thiên Long WB-03 (Lẻ)', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '9K', fm: 'Lẻ', rv: '56.5 Tr', g: '-31%', us: '6.3K', ug: '-32%', re: '134,682', tr: '1.1 Tỷ', tu: '134.7K', url: 'https://shopee.vn/product/101480242/1635050528' },
          { n: 'Combo 10 Bút lông bảng Hoshi WB-025', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '136K', fm: 'WB-025', rv: '51.1 Tr', g: '+5%', us: '389', ug: '+5%', re: '144', tr: '133.5 Tr', tu: '1.1K', url: 'https://shopee.vn/product/101480242/29970555771' },
          { n: 'Bút lông bảng Hoshi WB-025 (Công nghệ Nhật)', sc: 'long_bang', br: 'Thiên Long', ch: 'shopee', pr: '25K', fm: 'Hoshi', rv: '49.7 Tr', g: '-72%', us: '2.6K', ug: '-63%', re: '679', tr: '227.2 Tr', tu: '9.7K', url: 'https://shopee.vn/product/367619913/55600034017' },
          { n: 'Combo 5-10-20 Bút Lông Bảng DELI', sc: 'long_bang', br: 'Deli', ch: 'shopee', pr: '40K', fm: 'Deli', rv: '49.2 Tr', g: '-15%', us: '1.1K', ug: '-28%', re: '1,474', tr: '368.4 Tr', tu: '11.6K', url: 'https://shopee.vn/product/127805122/25724132256' }
        ]
      },
      xoa_nuoc: {
        kpi: [{ l: 'Gross Sales (VND)', v: '1.2', u: 'Tỷ', g: '+39%', sub: 'vs 880.4 triệu in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '50.8', u: 'Nghìn', g: '-2%', sub: 'vs 52.0 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '24.5%', u: '', g: '+17.8pp', sub: 'vs 6.7% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '563', u: '', g: '-16%', sub: 'vs 669 in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '1.2', u: 'Tỷ', g: '+39%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~49.2%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '24.5%', u: '', g: '+17.8pp', sub: 'vs 6.7% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Thiên Long (45.8%)', u: '', g: '', sub: '6/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 0.8898, pre: 0.622, c: '#f97316' }, { n: 'TikTok Shop', cur: 0.2941, pre: 0.207, c: '#0f172a' }, { n: 'Lazada', cur: 0.0364, pre: 0.052, c: '#3b82f6' }, { n: 'Tiki', cur: 0.000209, pre: 0.0006, c: '#1a94ff' }],
        brand: [{ n: 'Thiên Long', cur: 45.8, pre: 34.2, c: '#1a56db' }, { n: 'Deli', cur: 3.2, pre: 3.5, c: '#ef4444' }, { n: 'Besta', cur: 3.0, pre: 0, c: '#10b981' }, { n: 'Plus', cur: 1.2, pre: 0.8, c: '#8b5cf6' }, { n: 'King', cur: 1.2, pre: 1.6, c: '#f59e0b' }, { n: 'Others', cur: 45.6, pre: 59.9, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.063, l: 0, t: 0 }, { r: '10K-30K', s: 0.708, l: 0, t: 0 }, { r: '30K-50K', s: 0.094, l: 0, t: 0 }, { r: '50K-75K', s: 0.161, l: 0, t: 0 }, { r: '75K-100K', s: 0.099, l: 0, t: 0 }, { r: '100K-150K', s: 0.020, l: 0, t: 0 }, { r: '150K-200K', s: 0.068, l: 0, t: 0 }, { r: '200K-350K', s: 0.005, l: 0, t: 0 }],
        prod: [
          { n: 'Bút xóa nước Thiên Long CP-02 (Mã 1)', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '25K', fm: 'CP-02', rv: '254.7 Tr', g: '-39%', us: '10.4K', ug: '-43%', re: '8,043', tr: '1.7 Tỷ', tu: '79.0K', url: 'https://shopee.vn/product/101480242/1635050758' },
          { n: 'Bút xóa Thiên Long CP-02 (Mã 2)', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '25K', fm: 'CP-02', rv: '72.3 Tr', g: '+4%', us: '2.9K', ug: '-1%', re: '1,777', tr: '329.8 Tr', tu: '15.1K', url: 'https://shopee.vn/product/368671137/23081877413' },
          { n: 'Bút xóa dạng bấm xoay 360 độ M.Y', sc: 'xoa_nuoc', br: 'OEM/Khác', ch: 'tiktok', pr: '14K', fm: 'Xoay 360', rv: '58.8 Tr', g: '+251%', us: '4.0K', ug: '+232%', re: '373', tr: '78.6 Tr', tu: '5.4K', url: 'https://www.tiktok.com/view/product/1732910021645272362' },
          { n: 'Bút xóa Thiên Long CP-05 (Thân trụ)', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '15K', fm: 'CP-05', rv: '36.5 Tr', g: '+35%', us: '2.4K', ug: '+34%', re: '1,033', tr: '127.7 Tr', tu: '8.1K', url: 'https://shopee.vn/product/101480242/1635050763' },
          { n: 'Bút xóa nước Besta CP-01', sc: 'xoa_nuoc', br: 'Besta', ch: 'shopee', pr: '9K', fm: 'CP-01', rv: '36.0 Tr', g: '+59%', us: '4.0K', ug: '+67%', re: '1,927', tr: '89.7 Tr', tu: '9.7K', url: 'https://shopee.vn/product/946543924/18389263613' },
          { n: 'Sỉ 12 cây bút xóa nước Yoto CP08', sc: 'xoa_nuoc', br: 'Yoto', ch: 'shopee', pr: '67K', fm: 'Hộp 12', rv: '34.3 Tr', g: '-32%', us: '543', ug: '-38%', re: '663', tr: '192.9 Tr', tu: '3.7K', url: 'https://shopee.vn/product/24781091/20994842389' },
          { n: 'Hộp 10 Bút xóa nước Thiên Long', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'tiktok', pr: '84K', fm: 'Hộp 10', rv: '25.4 Tr', g: '—', us: '302', ug: '—', re: '18', tr: '25.4 Tr', tu: '302', url: 'https://www.tiktok.com/view/product/1734011599075313581' },
          { n: '10 Bút xóa nước Thiên Long nhanh khô', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '80K', fm: '10 cây', rv: '25.0 Tr', g: '+195%', us: '323', ug: '+194%', re: '28', tr: '33.5 Tr', tu: '433', url: 'https://shopee.vn/product/1473624456/45152286579' },
          { n: 'Combo 10 Bút xóa nước Thiên Long CP-02', sc: 'xoa_nuoc', br: 'Thiên Long', ch: 'shopee', pr: '191K', fm: 'CP-02', rv: '25.0 Tr', g: '+15%', us: '126', ug: '+4%', re: '97', tr: '80.5 Tr', tu: '410', url: 'https://www.lazada.vn/products/thien-long-van-phong-pham-i2598473689.html' },
          { n: 'Bút xóa nước rẻ CP08 (Hộp 12 cây)', sc: 'xoa_nuoc', br: 'OEM/Khác', ch: 'shopee', pr: '60K', fm: 'Hộp 12', rv: '22.9 Tr', g: '-18%', us: '382', ug: '-22%', re: '1,410', tr: '282.5 Tr', tu: '7.6K', url: 'https://shopee.vn/product/204094877/17481153691' }
        ]
      },
      file_folder: {
        kpi: [{ l: 'Gross Sales (VND)', v: '9.1', u: 'Tỷ', g: '+46%', sub: 'vs 6.2 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '258.0', u: 'Nghìn', g: '-14%', sub: 'vs 298.5 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '26.4%', u: '', g: '+15.9pp', sub: 'vs 10.5% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '1.3', u: 'Nghìn', g: '-8%', sub: 'vs 1.4 nghìn in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '9.1', u: 'Tỷ', g: '+46%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~67.6%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '26.4%', u: '', g: '+15.9pp', sub: 'vs 10.5% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Deli (14.3%)', u: '', g: '', sub: '1/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 6.6, pre: 5.37, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.4, pre: 0.65, c: '#0f172a' }, { n: 'Lazada', cur: 0.1282, pre: 0.217, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0066, pre: 0.02, c: '#1a94ff' }],
        brand: [{ n: 'Deli', cur: 14.3, pre: 16.4, c: '#ef4444' }, { n: 'Flexoffice', cur: 4.4, pre: 4.1, c: '#1a56db' }, { n: 'Decorme', cur: 2.8, pre: 0, c: '#8b5cf6' }, { n: 'Knote', cur: 2.0, pre: 0, c: '#10b981' }, { n: 'Plus', cur: 1.9, pre: 3.3, c: '#f59e0b' }, { n: 'Others', cur: 74.6, pre: 76.2, c: '#cbd5e1' }],
        price: [{ r: '< 10K', s: 0.093, l: 0, t: 0 }, { r: '10K-30K', s: 2.216, l: 0, t: 0 }, { r: '30K-50K', s: 3.760, l: 0, t: 0 }, { r: '50K-75K', s: 1.305, l: 0, t: 0 }, { r: '75K-100K', s: 0.696, l: 0, t: 0 }, { r: '100K-150K', s: 0.530, l: 0, t: 0 }, { r: '150K-200K', s: 0.310, l: 0, t: 0 }, { r: '200K-350K', s: 0.104, l: 0, t: 0 }, { r: '350K-500K', s: 0.055, l: 0, t: 0 }, { r: '500K-750K', s: 0.022, l: 0, t: 0 }, { r: '750K-1.0M', s: 0.010, l: 0, t: 0 }, { r: '1.0M-1.5M', s: 0.012, l: 0, t: 0 }],
        prod: [
          { n: 'File Lá Đa Năng Deli (Lưu ảnh/giấy)', sc: 'file_folder', br: 'Deli', ch: 'shopee', pr: '39K', fm: 'Đa năng', rv: '844.2 Tr', g: '+64%', us: '20.0K', ug: '+51%', re: '15,314', tr: '7.6 Tỷ', tu: '219.3K', url: 'https://www.tiktok.com/view/product/1729454663877888639' },
          { n: 'Bìa kẹp tài liệu da A4 (DecorMe)', sc: 'file_folder', br: 'DecorMe', ch: 'tiktok', pr: '140K', fm: 'Da A4', rv: '220.3 Tr', g: '+1223%', us: '1.6K', ug: '+1268%', re: '61', tr: '248.4 Tr', tu: '1.8K', url: 'https://www.tiktok.com/view/product/1729695118761429492' },
          { n: 'File lá đựng tài liệu KNOTE (100 lá)', sc: 'file_folder', br: 'Knote', ch: 'shopee', pr: '59K', fm: '100 lá', rv: '175.9 Tr', g: '-33%', us: '3.0K', ug: '-38%', re: '2,315', tr: '909.1 Tr', tu: '18.0K', url: 'https://shopee.vn/product/1426030880/26172006082' },
          { n: 'Túi đựng hồ sơ hoạt hình (MIGE HOME)', sc: 'file_folder', br: 'OEM/Khác', ch: 'tiktok', pr: '52K', fm: 'Hoạt hình', rv: '164.7 Tr', g: '+299%', us: '4.0K', ug: '+212%', re: '308', tr: '235.4 Tr', tu: '6.1K', url: 'https://www.tiktok.com/view/product/1732263026713461931' },
          { n: 'Tập 100 túi sơ mi lỗ A4 (MIYABI)', sc: 'file_folder', br: 'OEM/Khác', ch: 'shopee', pr: '41K', fm: '100 túi', rv: '138.9 Tr', g: '+3%', us: '3.5K', ug: '0%', re: '2,185', tr: '689.9 Tr', tu: '19.9K', url: 'https://shopee.vn/product/38778987/1909033407' },
          { n: 'Bìa còng A4 lưu trữ hồ sơ (MIYABI)', sc: 'file_folder', br: 'OEM/Khác', ch: 'shopee', pr: '35K', fm: 'Bìa còng', rv: '120.7 Tr', g: '+94%', us: '3.4K', ug: '+93%', re: '1,352', tr: '637.4 Tr', tu: '26.3K', url: 'https://shopee.vn/product/38778987/1609419730' },
          { n: 'File lá đựng tài liệu QPENZ (100 lá)', sc: 'file_folder', br: 'Qpenz', ch: 'tiktok', pr: '79K', fm: '100 lá', rv: '103.2 Tr', g: '-6%', us: '1.2K', ug: '-10%', re: '131', tr: '217.3 Tr', tu: '2.7K', url: 'https://www.tiktok.com/view/product/1732643968477464269' },
          { n: 'Xấp 100 bìa lá A4 Plus', sc: 'file_folder', br: 'Plus', ch: 'shopee', pr: '160K', fm: '100 bìa', rv: '95.1 Tr', g: '-22%', us: '596', ug: '-22%', re: '734', tr: '811.8 Tr', tu: '5.5K', url: 'https://shopee.vn/product/14668875/4934838718' },
          { n: 'Túi đựng tài liệu nhiều ngăn M.Y', sc: 'file_folder', br: 'M.Y', ch: 'shopee', pr: '22K', fm: 'Nhiều ngăn', rv: '94.1 Tr', g: '-11%', us: '4.2K', ug: '+12%', re: '1,810', tr: '222.8 Tr', tu: '8.9K', url: 'https://shopee.vn/product/1451947204/40606966998' },
          { n: 'Bìa lỗ 320g (Giấy in Hải Hà)', sc: 'file_folder', br: 'OEM/Khác', ch: 'shopee', pr: '32K', fm: '320g', rv: '93.9 Tr', g: '+18%', us: '3.3K', ug: '+12%', re: '2,024', tr: '539.5 Tr', tu: '21.2K', url: 'https://shopee.vn/product/14668875/2044884400' }
        ]
      },
      giay_copy: {
        kpi: [{ l: 'Gross Sales (VND)', v: '32.6', u: 'Tỷ', g: '+67%', sub: 'vs 19.5 tỷ in Q1 2025', ic: 'blue' }, { l: 'Units Sold', v: '233.2', u: 'Nghìn', g: '+36%', sub: 'vs 172.0 nghìn in Q1 2025', ic: 'green' }, { l: 'TikTok Market Share', v: '7.7%', u: '', g: '-2.5pp', sub: 'vs 10.2% in Q1 2025', ic: 'teal' }, { l: 'Active Storefronts', v: '729', u: '', g: '-4%', sub: 'vs 763 in Q1 2025', ic: 'orange' }],
        dkpi: [{ l: 'Gross Sales (VND)', v: '32.6', u: 'Tỷ', g: '+67%', ic: 'blue' }, { l: 'Top 10 Contribution', v: '~40.2%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' }, { l: 'TikTok Market Share', v: '7.7%', u: '', g: '-2.5pp', sub: 'vs 10.2% in Q1 2025', ic: 'teal' }, { l: 'Leading Brand', v: 'Ik Copy (49.3%)', u: '', g: '', sub: '8/10 Top SKU Spots', ic: 'orange' }],
        plat: [{ n: 'Shopee', cur: 29.7, pre: 16.1, c: '#f97316' }, { n: 'TikTok Shop', cur: 2.5, pre: 2.84, c: '#0f172a' }, { n: 'Lazada', cur: 0.3396, pre: 0.478, c: '#3b82f6' }, { n: 'Tiki', cur: 0.0391, pre: 0.044, c: '#1a94ff' }],
        brand: [{ n: 'Ik Copy', cur: 49.3, pre: 55.5, c: '#3b82f6' }, { n: 'Deli', cur: 16.3, pre: 1.4, c: '#ef4444' }, { n: 'Thiên Long', cur: 9.6, pre: 13.1, c: '#1a56db' }, { n: 'Paper One', cur: 4.3, pre: 3.6, c: '#10b981' }, { n: 'Double A', cur: 2.5, pre: 2.8, c: '#8b5cf6' }, { n: 'Others', cur: 18.0, pre: 23.6, c: '#cbd5e1' }],
        price: [{ r: '10K-30K', s: 0.973, l: 0, t: 0 }, { r: '30K-50K', s: 1.016, l: 0, t: 0 }, { r: '50K-75K', s: 2.315, l: 0, t: 0 }, { r: '75K-100K', s: 4.226, l: 0, t: 0 }, { r: '100K-150K', s: 1.086, l: 0, t: 0 }, { r: '150K-200K', s: 0.312, l: 0, t: 0 }, { r: '200K-350K', s: 2.193, l: 0, t: 0 }, { r: '350K-500K', s: 13.883, l: 0, t: 0 }, { r: '500K-750K', s: 3.841, l: 0, t: 0 }, { r: '750K-1.0M', s: 2.526, l: 0, t: 0 }],
        prod: [
          { n: 'Combo 5 ream Giấy IK Copy 70gsm', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '408K', fm: '70gsm', rv: '2.5 Tỷ', g: '+7%', us: '6.8K', ug: '-1%', re: '15,994', tr: '23.0 Tỷ', tu: '70.2K', url: 'https://shopee.vn/product/101480242/16794017668' },
          { n: '10 ream Giấy A4 IK Copy 70gsm', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '817K', fm: '70gsm', rv: '1.8 Tỷ', g: '+14%', us: '2.3K', ug: '+6%', re: '2,950', tr: '8.2 Tỷ', tu: '12.0K', url: 'https://shopee.vn/product/101480242/10499808000' },
          { n: 'Combo 10 ream Giấy IK Copy 80gsm', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '709K', fm: '80gsm', rv: '1.4 Tỷ', g: '+28%', us: '2.1K', ug: '+25%', re: '1,505', tr: '4.6 Tỷ', tu: '6.9K', url: 'https://shopee.vn/product/368671137/23940020482' },
          { n: 'Voucher Live Thùng 5-10 ream Deli', sc: 'giay_copy', br: 'Deli', ch: 'shopee', pr: '375K', fm: 'Thùng', rv: '1.3 Tỷ', g: '-53%', us: '3.7K', ug: '-60%', re: '6,256', tr: '7.6 Tỷ', tu: '30.8K', url: 'https://shopee.vn/product/127805122/29227911732' },
          { n: 'Combo 10 ream Giấy IK Copy 70gsm (MT)', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '725K', fm: '70gsm', rv: '1.2 Tỷ', g: '+145%', us: '1.7K', ug: '+128%', re: '2,309', tr: '5.6 Tỷ', tu: '8.4K', url: 'https://shopee.vn/product/367619913/23630511462' },
          { n: 'Mã 60K Live Combo 5 ream Deli', sc: 'giay_copy', br: 'Deli', ch: 'shopee', pr: '375K', fm: '5 ream', rv: '1.2 Tỷ', g: '-17%', us: '3.3K', ug: '-32%', re: '3,473', tr: '4.6 Tỷ', tu: '18.3K', url: 'https://shopee.vn/product/348955539/28678999911' },
          { n: 'Combo 5 ream Giấy IK Copy Plus 80gsm', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '354K', fm: '80gsm', rv: '1.0 Tỷ', g: '-12%', us: '2.9K', ug: '-18%', re: '6,548', tr: '9.0 Tỷ', tu: '27.7K', url: 'https://shopee.vn/product/368671137/23228967167' },
          { n: 'Combo 5 ream Giấy IK Copy 80gsm (MT)', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '354K', fm: '80gsm', rv: '960.5 Tr', g: '+35%', us: '2.7K', ug: '+27%', re: '7,798', tr: '9.8 Tỷ', tu: '30.5K', url: 'https://shopee.vn/product/367619913/21772657261' },
          { n: 'Giấy A4 500 tờ lẻ IK Copy 70gsm', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '81K', fm: 'Lẻ', rv: '938.6 Tr', g: '-30%', us: '12.2K', ug: '-36%', re: '19,484', tr: '7.9 Tỷ', tu: '117.1K', url: 'https://shopee.vn/product/101480242/12922307639' },
          { n: 'Combo 5-10 thùng Giấy IK Copy Plus', sc: 'giay_copy', br: 'Ik Copy', ch: 'shopee', pr: '408K', fm: 'Thùng', rv: '803.9 Tr', g: '+19%', us: '1.9K', ug: '+6%', re: '852', tr: '1.6 Tỷ', tu: '4.2K', url: 'https://shopee.vn/product/101480242/28336031353' }
        ]
      }
    }
  }
};

/* ===== DYNAMIC AGGREGATION FOR ALL CATE ===== */
(function buildAllCate() {
  const cats = ['but_viet', 'hoc_cu', 'my_thuat', 'van_phong_pham'];
  let totalCur = 0, totalPre = 0;
  let unitsCur = 0, unitsPre = 0;
  let shareCurSum = 0, sharePreSum = 0;
  let storeCur = 0, storePre = 0;
  
  let platMap = {};
  let brandMapCur = {};
  let priceMap = {};
  let allProds = [];

  cats.forEach(k => {
    if(!CAT[k]) return;
    const d = CAT[k];
    
    const getVal = (str) => {
      let m = String(str).match(/[\d.]+/);
      return m ? parseFloat(m[0]) : 0;
    };
    
    // KPI 0: Gross Sales
    let curG = getVal(d.kpi[0].v);
    let preGMatch = String(d.kpi[0].sub).match(/[\d.]+/);
    let preG = preGMatch ? parseFloat(preGMatch[0]) : 0;
    
    totalCur += curG; totalPre += preG;
    
    // KPI 1: Units
    let curU = getVal(d.kpi[1].v);
    let preUMatch = String(d.kpi[1].sub).match(/[\d.]+/);
    let preU = preUMatch ? parseFloat(preUMatch[0]) : 0;
    unitsCur += curU; unitsPre += preU;
    
    // KPI 2: TikTok Market Share
    let curS = getVal(d.kpi[2].v);
    let preSMatch = String(d.kpi[2].sub).match(/[\d.]+/);
    let preS = preSMatch ? parseFloat(preSMatch[0]) : 0;
    shareCurSum += curG * curS;
    if (preS) sharePreSum += preG * preS;
    
    // KPI 3: Storefronts
    let getStore = (str) => {
      let s = String(str);
      let v = getVal(s.replace(/,/g, ''));
      return s.toLowerCase().includes('nghìn') || v < 100 ? v * 1000 : v;
    };
    storeCur += getStore(d.kpi[3].v);
    storePre += getStore(d.kpi[3].sub);
    
    // Platforms
    if (d.plat) {
      d.plat.forEach(p => {
         if(!platMap[p.n]) platMap[p.n] = {n: p.n, cur:0, pre:0, c: p.c};
         platMap[p.n].cur += p.cur;
         platMap[p.n].pre += p.pre;
      });
    }
    
    // Brands
    if (d.brand) {
      d.brand.forEach(b => {
         let n = b.n === 'TL' ? 'Thiên Long' : b.n;
         if(!brandMapCur[n]) { brandMapCur[n] = {n: n, curAbs: 0, preAbs: 0, c: b.c}; }
         brandMapCur[n].curAbs += (b.cur / 100) * curG;
         brandMapCur[n].preAbs += (b.pre / 100) * preG;
      });
    }
    
    // Prices
    if (d.price) {
      d.price.forEach(p => {
        let r = p.r.replace('.0M', 'M');
        if(!priceMap[r]) priceMap[r] = {r: r, s:0, l:0, t:0};
        priceMap[r].s += p.s||0;
        priceMap[r].l += p.l||0;
        priceMap[r].t += p.t||0;
      });
    }
    
    // Prod
    if (d.prod) {
      d.prod.forEach(p => { allProds.push({...p, cat: d.n}); });
    }
  });

  const pFmt = (v) => v > 0 ? '+'+Math.abs(v) : v == 0 ? '0' : '-'+Math.abs(v);
  const groG = ((totalCur - totalPre)/totalPre * 100).toFixed(0);
  const groU = ((unitsCur - unitsPre)/unitsPre * 100).toFixed(0);
  const groSt = ((storeCur - storePre)/storePre * 100).toFixed(0);
  
  const tShrCur = (shareCurSum / totalCur).toFixed(1);
  const tShrPre = (sharePreSum / totalPre).toFixed(1);
  const groShr = (tShrCur - tShrPre).toFixed(1);
  
  const fmtSt = storeCur > 1000 ? (storeCur/1000).toFixed(1) : storeCur.toFixed(0);
  const fmtStU = storeCur > 1000 ? 'Nghìn' : '';
  const fmtStPre = storePre > 1000 ? (storePre/1000).toFixed(1) + ' nghìn' : storePre.toFixed(0);

  const kpis = [
    { l: 'Gross Sales (VND)', v: totalCur.toFixed(1), u: 'Tỷ', g: pFmt(groG)+'%', sub: `vs ${totalPre.toFixed(1)} tỷ in Q1 2025`, ic: 'blue' },
    { l: 'Units Sold', v: unitsCur.toFixed(1), u: 'Triệu', g: pFmt(groU)+'%', sub: `vs ${unitsPre.toFixed(1)} triệu in Q1 2025`, ic: 'green' },
    { l: 'TikTok Market Share', v: tShrCur+'%', u: '', g: pFmt(groShr)+'pp', sub: `vs ${tShrPre}% in Q1 2025`, ic: 'teal' },
    { l: 'Active Storefronts', v: fmtSt, u: fmtStU, g: pFmt(groSt)+'%', sub: `vs ${fmtStPre} in Q1 2025`, ic: 'orange' }
  ];
  
  let platArr = Object.values(platMap).sort((a,b)=>b.cur - a.cur);
  
  let brands = Object.values(brandMapCur);
  brands.forEach(b => {
     b.cur = (b.curAbs / totalCur) * 100;
     b.pre = totalPre > 0 ? (b.preAbs / totalPre) * 100 : 0;
  });
  brands.sort((a,b)=>b.cur - a.cur);
  
  let finalBrands = [];
  let othersCur = 0, othersPre = 0;
  brands.forEach(b => {
     if(finalBrands.length < 5 && b.n.toLowerCase() !== 'others') {
         finalBrands.push(b);
     } else {
         othersCur += b.cur; othersPre += b.pre;
     }
  });
  finalBrands.push({n: 'Others', cur: othersCur, pre: othersPre, c: '#cbd5e1'});

  const priceOrder = [
    '< 10K','10K-30K','30K-50K','50K-75K','75K-100K','100K-150K','150K-200K',
    '200K-350K','350K-500K','500K-750K','750K-1M','1M-1.5M','1.5M-2M','2M-3.5M'
  ];
  let finalPrices = [];
  priceOrder.forEach(r => { if(priceMap[r]) finalPrices.push(priceMap[r]); });
  
  const getRv = (str) => {
    if(!str) return 0;
    let s = str.toString();
    if(s.includes('Tỷ')) return parseFloat(s) * 1000;
    if(s.includes('Tr')) return parseFloat(s);
    return 0;
  };
  allProds.sort((a,b) => getRv(b.rv) - getRv(a.rv));
  let topProds = allProds.slice(0, 10);

  let top10Rv = 0;
  for(let i=0; i<10 && i<topProds.length; i++) top10Rv += getRv(topProds[i].rv) / 1000; // in ty
  let top10Contri = (top10Rv / totalCur * 100).toFixed(1);
  
  let topBrandShare = finalBrands[0] || {n:'N/A', cur:0};
  let prodCnt = topProds.slice(0,10).filter(p=>{
     let n = (p.br||'').toLowerCase();
     let tn = topBrandShare.n.toLowerCase();
     return n.includes(tn) || tn.includes(n) || (tn==='thiên long' && (n==='tl' || n==='colokit' || n==='flexoffice'));
  }).length;
  
  const allObj = {
    n: 'All Cate', i: '🌐',
    sc: [{ k: 'all', n: 'Tất cả', i: '📊' }],
    kpi: kpis,
    dkpi: [
      kpis[0],
      { l: 'Top 10 Contribution', v: '~' + top10Contri + '%', u: '', g: '', sub: 'of Total Gross Sales', ic: 'green' },
      kpis[2],
      { l: 'Leading Brand', v: `${topBrandShare.n} (${topBrandShare.cur.toFixed(1)}%)`, u: '', g: '', sub: `${prodCnt}/10 Top SKU Spots`, ic: 'orange' }
    ],
    plat: platArr,
    brand: finalBrands,
    price: finalPrices,
    prod: topProds
  };

  // Reorder to put 'all' at the beginning
  let temp = {};
  Object.keys(CAT).forEach(k => { temp[k] = CAT[k]; delete CAT[k]; });
  CAT['all'] = allObj;
  Object.keys(temp).forEach(k => { CAT[k] = temp[k]; });
})();
