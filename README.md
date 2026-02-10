# 💰 Expenza - Track Smarter. Save Better

A modern, feature-rich personal finance tracker built with React. Track your expenses, set budgets, monitor savings goals, and manage your finances month-by-month with a beautiful dark-themed interface.

![Expenza Banner](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.x-7952b3?style=for-the-badge&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 💵 Budget Management
- Set and edit monthly budgets
- Multi-currency support (USD, EUR, GBP, INR, JPY)
- Real-time budget tracking
- Visual progress indicators

### 📊 Expense Tracking
- Add, view, and delete expenses
- Search and filter expenses by name
- Categorized expense history
- Real-time calculations

### 🎯 Smart Analytics
- **Budget Usage Progress** - Visual progress bar with color-coded warnings
- **Savings Goal Tracker** - Set and monitor savings targets
- **Monthly Budget Cycle** - Compare spending pace vs. time elapsed
- Real-time insights and alerts

### 📅 Monthly Management
- Automatic month-end reset based on salary date
- Complete expense history by month
- View and analyze previous months
- Protected historical data (read-only)

### 🔍 Advanced Features
- Smart search functionality
- Custom salary date configuration
- Persistent data storage (localStorage)
- Fully responsive design
- Dark mode UI

## 🚀 Demo

![Expenza Screenshot](/src/assets/desktopss.png)


## 🛠️ Tech Stack

- **Frontend:** React 18.x
- **State Management:** Context API + useReducer
- **Styling:** Bootstrap 5 + Custom CSS
- **Icons:** React Icons
- **Storage:** LocalStorage
- **Build Tool:** Vite

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/expenza.git
cd expenza
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
Navigate to http://localhost:5173
```

## 📁 Project Structure
```
expenza/
├── public/
├── src/
│   ├── components/
│   │   ├── AddExpenseForm.jsx
│   │   ├── Budget.jsx
│   │   ├── BudgetProgress.jsx
│   │   ├── ExpenseItem.jsx
│   │   ├── ExpenseList.jsx
│   │   ├── ExpenseTotal.jsx
│   │   ├── MonthDisplay.jsx
│   │   ├── MonthlyBudgetCycle.jsx
│   │   ├── MonthlyHistory.jsx
│   │   ├── Remaining.jsx
│   │   ├── SalaryDateSettings.jsx
│   │   ├── SavingsGoal.jsx
│   │   └── SearchBar.jsx
│   ├── Context/
│   │   └── AppContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## 🎨 Features Breakdown

### Budget Usage Progress
- Visual representation of budget consumption
- Color-coded alerts:
  - 🟢 Green (0-49%): You're doing well
  - 🟡 Yellow (50-79%): Approaching limit
  - 🔴 Red (80-100%+): Overspending alert

### Savings Goal Tracker
- Set custom savings targets
- Track progress toward goals
- Motivational achievement alerts
- Multi-currency support

### Monthly Budget Cycle
- Shows time elapsed in the month
- Compares spending pace vs. time
- Smart status indicators:
  - ✅ "On track!" - Spending below pace
  - ⚠️ "Spending too fast" - Moderate overspending
  - 🚨 "Overspending!" - Significant overspending

### Monthly History
- Automatic archival on salary date
- View complete expense records by month
- Summary statistics per month
- Protected read-only historical data

## 🔧 Configuration

### Setting Your Salary Date
1. Click "Change" next to the salary date display
2. Enter your preferred date (1-31)
3. Your month will auto-reset on this date

### Changing Currency
1. Click "Edit" on the Budget card
2. Select your preferred currency from the dropdown
3. All amounts will update automatically

### Setting Savings Goals
1. Click "Set Goal" on the Savings Goal card
2. Enter your target amount
3. Track your progress throughout the month

## 💾 Data Persistence

All data is stored locally in your browser using `localStorage`:
- Budget settings
- Currency preferences
- All expenses
- Monthly history
- Salary date configuration

**Note:** Data persists across sessions but is device-specific. Clearing browser data will reset the app.

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

Expenza is fully responsive and optimized for:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

## 🎯 Roadmap

- [ ] Export data to CSV/PDF
- [ ] Expense categories
- [ ] Data visualization (charts/graphs)
- [ ] Cloud sync & authentication
- [ ] Recurring expense support
- [ ] Budget templates
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Income tracking
- [ ] Bill reminders

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@m-abdullah-06](https://github.comm-abdullah-06)
- LinkedIn: [Muhammad Abdullah](https://www.linkedin.com/in/muhammad-abdullah-09390938a/)
- Email: abdullah.muhammad.xyz@gmail.com

## 🙏 Acknowledgments

- Bootstrap for the UI framework
- React Icons for beautiful icons
- The React community for inspiration

## 📸 Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Expense History
![History](screenshots/history.png)

### Mobile View
![Mobile](screenshots/mobile.png)

---

<p align="center">Made with ❤️ and React</p>
<p align="center">⭐ Star this repo if you found it helpful!</p>
```



MIT License

Copyright (c) 2025 Muhammad Abdullah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
