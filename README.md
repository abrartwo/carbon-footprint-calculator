# 🌍 Student Carbon Footprint Calculator

An **activity-based carbon footprint calculator** designed for **urban university students in Bangladesh**.
The app estimates a student’s **annual carbon footprint (kg CO₂e/year)** based on daily activities such as transport, diet, electricity use, and digital device usage.


## Deployment Link

<a href="https://carbon-footprint-calculator-cyan.vercel.app/"><img src="public/logo.svg" alt="Boolean Simplify Logo" width="25"/></a> [Click here to visit the deployed application](https://carbon-footprint-calculator-cyan.vercel.app/)


---

## Features

* 🚍 **Transport footprint**

  * Walking, rickshaw, CNG, bus, shuttle, car
  * Distance and commute frequency considered

* 🍽️ **Food & diet footprint**

  * Beef, chicken, fish, eggs, and dairy consumption
  * Weekly servings converted to annual emissions

* 🏠 **Accommodation energy**

  * Monthly electricity bill
  * Shared accommodation adjustment
  * Bangladesh grid emission factor

* 💻 **Digital activity**

  * Smartphone usage (hours/day)
  * Laptop/PC usage (hours/day)

* 📊 **Final result display**

  * Annual carbon footprint (kg CO₂e/year)
  * Smooth in-page result reveal
  * Restart option

---

## Methodology

This calculator follows an **activity-based approach**, using emission factors and assumptions aligned with academic literature and a Python reference model.

### Emission Factors (examples)

| Category              | Factor               |
| --------------------- | -------------------- |
| Car                   | 0.192 kg CO₂e / km   |
| Bus                   | 0.089 kg CO₂e / km   |
| Electricity (BD grid) | 0.63 kg CO₂e / kWh   |
| Beef                  | 27.0 kg CO₂e / kg    |
| Digital usage         | 0.035 kg CO₂e / hour |

Serving sizes and annualization are handled internally to produce yearly estimates.

---

## Tech Stack

* **Next.js (App Router)**
* **React (Client Components)**
* **Tailwind CSS**
* JavaScript (ES6)

---

##  How It Works

1. The user answers a series of questions.
2. Each question collects activity data.
3. Emission factors are applied to calculate CO₂e.
4. The total annual footprint is displayed on completion.

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Open in browser

```
http://localhost:3000
```

---

## 🔄 Restarting the Calculator

After viewing results, users can restart the calculator and enter new data without refreshing the page.

---

## 📚 Intended Use

* University sustainability projects
* Environmental awareness campaigns
* Academic research & student surveys
* Educational demonstrations

---

## ⚠️ Disclaimer

This tool provides **estimates**, not exact measurements.
Actual emissions may vary depending on lifestyle, technology efficiency, and regional differences.

---

## 🌱 Future Improvements

* Category-wise emission breakdown (pie charts)
* Daily footprint display (kg CO₂e/day)
* Backend integration (FastAPI / Python)
* Data export (CSV / PDF)
* User comparisons and recommendations

---

## 👤 Author

Developed as part of an **academic carbon footprint assessment project**
focused on **urban university students in Bangladesh**.