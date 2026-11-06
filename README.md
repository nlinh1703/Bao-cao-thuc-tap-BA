# Phân tích và thiết kế hệ thống CV Marketplace tại Công ty Light Human

Đề tài thực tập tốt nghiệp ngành Hệ thống thông tin quản lý – Trường Đại học Giao thông vận tải TP. Hồ Chí Minh.

| Thông tin | Nội dung |
|---|---|
| Mã đề tài | HKDN_MIS_00 |
| Sinh viên thực hiện | Nguyễn Thị Nhật Linh – MSSV: 036305000092 |
| Giảng viên hướng dẫn | ThS. Mai Ngọc Châu |
| Cán bộ hướng dẫn tại doanh nghiệp | ThS. Nguyễn Ngọc Hương Trâm – CEO Công ty Light Human |
| Video báo cáo | *(cần bổ sung link YouTube)* |
| Demo trực tuyến | https://nlinh1703.github.io/Bao-cao-thuc-tap-BA/Code/ |

## Giới thiệu

CV Marketplace là hệ thống giúp Light Human khai thác thương mại nguồn CV ứng viên sẵn có: HR và cộng tác viên đưa CV vào hệ thống, HR sàng lọc, khách hàng tự tìm kiếm và mua CV, commission được chia tự động cho các vai trò Source, Screener và Referral, ứng viên tự bật/tắt Open to Work qua link cá nhân.

Đề tài là đồ án thực tập theo doanh nghiệp, tập trung vào **phân tích nghiệp vụ và thiết kế hệ thống**: business rules, BPMN TO-BE, yêu cầu chức năng và phi chức năng, use case kèm acceptance criteria, sơ đồ hoạt động, sơ đồ tuần tự, ERD, từ điển dữ liệu, phân quyền, kiến trúc tổng quan và thiết kế giao diện. Lập trình back-end và triển khai phiên bản web chính thức nằm ngoài phạm vi; bản demo trong thư mục `Code/` là prototype giao diện chạy trên dữ liệu giả lập.

## Cấu trúc thư mục

```
Code/      Bản demo giao diện (HTML, CSS, JavaScript)
  index.html   Cổng người dùng: Khách hàng, HR, CTV, Người giới thiệu
  admin.html   Cổng quản trị: Admin (vào sau khi đăng nhập ở index.html)
  u.html       Trang link cá nhân của ứng viên
DOCX/      Báo cáo thực tập (Word)
Extra/     Tài liệu bổ sung
  Paper/       Paper LaTeX tóm tắt báo cáo (paper.tex, paper.pdf)
  SoDo/        File draw.io chứa toàn bộ sơ đồ (BPMN, UC, AD, SD, ERD, kiến trúc)
  Hinh/        Hình BPMN, kiến trúc và ảnh chụp màn hình demo
  BaoCaoTuan/  Báo cáo tiến độ hằng tuần
  BanThaoLightTalent/  Bản thảo đề tài ban đầu (LightTalent) trước khi doanh nghiệp đổi định hướng
PPTX/      Slide thuyết trình
```

## Kiến trúc

Kiến trúc đề xuất theo mô hình ba tầng (chi tiết tại mục 4.11 của báo cáo và hình `Extra/Hinh/Hinh_4.57_Kien_truc.png`):

- **Tầng giao diện:** cổng người dùng, cổng quản trị, trang link cá nhân của ứng viên.
- **Tầng ứng dụng:** sáu module (Tài khoản, Nguồn CV, Tìm kiếm và đơn hàng, Thanh toán và bàn giao, Commission và giới thiệu, Quản trị), lớp xác thực và phân quyền, lớp ghi lịch sử và thông báo.
- **Tầng dữ liệu:** cơ sở dữ liệu quan hệ 13 thực thể, kho lưu trữ file CV.
- **Hệ thống bên ngoài:** cổng thanh toán, Zalo OA, Email.

Bản demo chỉ hiện thực tầng giao diện: dữ liệu mẫu lưu trong trình duyệt (localStorage) và cổng thanh toán được mô phỏng.

## Yêu cầu môi trường và hướng dẫn chạy demo

- Chỉ cần trình duyệt web hiện đại (Chrome, Edge, Firefox). Không cần cài đặt, không có cấu hình hay khóa bí mật.
- **Xem trực tuyến:** mở https://nlinh1703.github.io/Bao-cao-thuc-tap-BA/Code/. Tất cả vai trò đăng nhập trên cùng một màn hình; tài khoản Admin được tự chuyển sang cổng quản trị.
- **Chạy trên máy:** tải repository, sau đó trong thư mục `Code/` chạy `python -m http.server 8000` rồi mở `http://localhost:8000`.
- Trang đăng nhập có nút đăng nhập nhanh theo vai trò; mật khẩu demo nhập bất kỳ. Nút "Khôi phục dữ liệu mẫu" đưa dữ liệu về trạng thái ban đầu.

| Vai trò | Tài khoản mẫu |
|---|---|
| Khách hàng | tuyendung@anphat.vn |
| HR | thu.tm@company.vn |
| CTV | han.pn@gmail.com |
| Người giới thiệu | nam.dh@company.vn |
| Admin | admin@company.vn |

Toàn bộ tên công ty, ứng viên và số liệu trong demo là dữ liệu giả lập.

## Ghi chú tiến độ

Repository được tạo ngày 07/09/2026 để lưu báo cáo tuần và bản thảo đề tài LightTalent. Cuối tháng 9/2026, doanh nghiệp điều chỉnh định hướng sang CV Marketplace nên tài liệu được làm lại trên Google Drive và máy cá nhân, sau đó cập nhật lên repository từ ngày 05/11/2026. Chi tiết tại mục 5.6 của báo cáo.
