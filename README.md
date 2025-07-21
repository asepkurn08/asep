
# InvestHub - Platform Investasi Modern

Platform investasi web modern yang dibangun dengan Node.js, Express, dan Bootstrap. Aplikasi ini menyediakan fitur-fitur lengkap untuk manajemen portofolio, trading, dan analisis pasar.

## 🚀 Fitur Utama

### 📊 Dashboard
- **Portfolio Overview**: Tampilan ringkasan nilai total portofolio dan performa harian
- **Market Summary**: Data pasar real-time untuk indeks utama
- **Quick Actions**: Akses cepat ke fitur trading dan analisis
- **Market News**: Berita pasar terkini dari sumber terpercaya

### 💼 Portfolio Management
- **Holdings Tracking**: Pantau semua investasi dalam satu tempat
- **Performance Analytics**: Grafik performa portofolio dengan Chart.js
- **Asset Allocation**: Visualisasi distribusi aset dengan pie chart
- **Return Calculation**: Perhitungan otomatis total return dan persentase

### 📈 Trading Center
- **Order Execution**: Form trading untuk buy/sell dengan berbagai order types
- **Market Watch**: Pantau harga saham favorit secara real-time
- **Order History**: Riwayat transaksi lengkap dengan status
- **Advanced Orders**: Market, Limit, Stop, dan Stop-Limit orders

### 📰 Market Analysis
- **Market Data**: Data indeks utama (S&P 500, NASDAQ, DOW, VIX)
- **Top Movers**: Daftar saham dengan performa terbaik dan terburuk
- **Sector Performance**: Analisis performa berdasarkan sektor
- **Research Tools**: Stock screener dan economic calendar
- **News Feed**: Berita pasar dengan filtering dan bookmark

### 🔐 Authentication
- **Secure Login**: Sistem login dengan session management
- **Demo Account**: Akses demo untuk testing fitur
- **User Management**: Profile management dan logout

## 🛠️ Teknologi

- **Backend**: Node.js, Express.js
- **Frontend**: EJS Templates, Bootstrap 5, Font Awesome
- **Charts**: Chart.js untuk visualisasi data
- **Styling**: CSS Custom dengan design modern
- **Icons**: Font Awesome 6

## 📦 Instalasi

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd investment-web-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Application**
   ```bash
   npm start
   ```

4. **Access Application**
   - Buka browser dan kunjungi: `http://localhost:3000`

## 🎯 Demo Login

Untuk mengakses aplikasi demo:
- **Email**: `demo@investhub.com`
- **Password**: `password123`

Atau gunakan email dan password apapun untuk demo.

## 📱 Fitur Responsive

Aplikasi ini sepenuhnya responsive dan dapat diakses dari:
- Desktop
- Tablet
- Mobile Phone

## 🏗️ Struktur Project

```
investment-web-app/
├── index.js              # Main server file
├── package.json          # Dependencies
├── views/                # EJS templates
│   ├── index.ejs         # Dashboard
│   ├── portfolio.ejs     # Portfolio management
│   ├── trade.ejs         # Trading center
│   ├── market.ejs        # Market analysis
│   └── login.ejs         # Login page
├── public/               # Static files
│   └── css/
│       └── main.css      # Custom styling
└── README.md            # Documentation
```

## 🚀 Development

### Scripts
- `npm start`: Start production server
- `npm run dev`: Start development server with nodemon

### Environment Variables
Buat file `.env` untuk konfigurasi:
```env
PORT=3000
NODE_ENV=development
```

## 🔄 API Endpoints

- `GET /` - Dashboard
- `GET /portfolio` - Portfolio page
- `GET /trade` - Trading page
- `GET /market` - Market analysis
- `GET /login` - Login page
- `POST /login` - Login authentication
- `GET /logout` - Logout
- `POST /api/trade` - Execute trade orders

## 📊 Data Demo

Aplikasi menggunakan data simulasi untuk demonstrasi:
- Portfolio dengan 5 saham utama (AAPL, GOOGL, MSFT, TSLA, AMZN)
- Market data real-time simulation
- News feed dengan artikel sample
- Trading history dengan sample orders

## 🎨 Customization

### Styling
Edit `public/css/main.css` untuk mengubah styling:
- CSS Variables untuk color scheme
- Responsive breakpoints
- Animation dan transitions

### Data
Edit `index.js` untuk mengubah:
- Portfolio data sample
- Market news content
- Stock symbols di watchlist

## 🔧 Production Deployment

Untuk deployment production:

1. **Environment Setup**
   ```bash
   export NODE_ENV=production
   export PORT=3000
   ```

2. **Process Manager (PM2)**
   ```bash
   npm install -g pm2
   pm2 start index.js --name "investhub"
   ```

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## 🔐 Security

- Session-based authentication
- CORS protection
- Input validation
- XSS protection melalui EJS

## 📄 License

MIT License - Lihat file LICENSE untuk detail lengkap.

## 🤝 Contributing

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📞 Support

Untuk pertanyaan atau dukungan:
- Email: support@investhub.com
- GitHub Issues: [Create Issue](https://github.com/yourusername/investment-web-app/issues)

---

**InvestHub** - Platform investasi modern untuk masa depan yang lebih baik! 🚀📈
