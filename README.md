# 2026 E-commerce Performance Dashboard

Một báo cáo tương tác hiệu suất cao (High-performance Interactive Dashboard) được thiết kế cho báo cáo điều hành, phân tích dữ liệu thương mại điện tử trên các sàn TMĐT Quý 1 năm 2026.

Link: [https://github.com/bci-team1/ecom_report/security](https://bci-team1.github.io/ecom_report/)
## 🚀 Tính năng chính

- **Kiến trúc 2 Slide:**
    - **Slide 1 (Executive Overview):** Tổng quan KPI toàn ngành hàng, động lực tăng trưởng theo nền tảng (Shopee, TikTok Shop, Lazada, Tiki) và bức tranh thương hiệu.
    - **Slide 2 (Segment Deep-Dive):** Phân tích sâu từng phân khúc giá và bảng xếp hạng TOP SKU theo doanh thu.
- **Bộ lọc thông minh (Multi-level Filtering):** Cho phép chuyển đổi nhanh giữa các Category (Bút Viết, Học Cụ, Mỹ Thuật, Văn Phòng Phẩm) và hàng chục Sub-category chi tiết.
- **Đồng bộ màu sắc thương hiệu (Dynamic Brand Sync):** Tự động thay đổi tông màu chủ đạo của dashboard và biểu đồ theo thương hiệu đang dẫn đầu thị trường (Ví dụ: Đỏ cho Deli, Xanh cho Thiên Long, Tím cho Casio).
- **Thiết kế Responsive & Animated:** Hiệu ứng chuyển cảnh mượt mà, tối ưu trên trình duyệt máy tính và các thiết bị trình chiếu.

## 📁 Cấu trúc thư mục

Để dễ dàng bảo trì và cập nhật tự động cho các quý tiếp theo (Q2, Q3, Q4), dự án được chia làm các file:

```text
├── sector_performance_slide.html   # File giao diện chính (UI & Logic)
├── ecom_data_2026_q1.js            # File dữ liệu duy nhất cho Quý 1
└── README.md                       # Hướng dẫn này
```

## 🛠️ Hướng dẫn cài đặt & Chạy báo cáo

1. **Yêu cầu:** Đảm bảo file `.html` và file `.js` nằm chung một thư mục.
2. **Cách chạy:**
    - **Tốt nhất:** Mở bằng một Web Server nội bộ (Ví dụ: `Live Server` trên VS Code hoặc Python `http.server`). 
    - *Lưu ý:* Nếu mở file trực tiếp (`file:///`), một số trình duyệt có thể chặn nạp dữ liệu từ file `.js` bên ngoài vì lý do bảo mật.
3. **Điều khiển:**
    - Sử dụng chuột để nhấn các nút Filter trên màn hình.
    - Phím mũi tên **Trái/Phải** hoặc **Space** để chuyển đổi giữa 2 slide báo cáo.

## 📊 Quy trình cập nhật dữ liệu (Update Workflow)

Báo cáo được thiết kế để cập nhật cực nhanh cho các kỳ tiếp theo mà không cần chạm vào code giao diện:

1. Copy dữ liệu thô từ báo cáo BI/Excel.
2. Cung cấp dữ liệu cho trợ lý AI để tự động tính toán (YoY, Share, Pre-values).
3. AI sẽ tạo ra file dữ liệu mới (Ví dụ: `ecom_data_2026_q2.js`).
4. Trong file `sector_performance_slide.html`, chỉ cần đổi đúng 1 dòng code ở cuối file:
   ```html
   <script src="ecom_data_2026_q2.js"></script>
   ```

---
**Thiên Long Group — Confidential | Business Intelligence Report 2026**
