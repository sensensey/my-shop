<template>
  <div class="checkout-wrapper">

    <div class="checkout-container">

      <div class="checkout-left">

        <section class="checkout-box">
          <h2 class="checkout-title">Shipping details</h2>

          <div class="form-grid">

            <div class="form-control">
              <label>First Name *</label>
              <input type="text" />
            </div>

            <div class="form-control">
              <label>Last Name *</label>
              <input type="text" />
            </div>

            <div class="form-control full">
              <label>Email Address *</label>
              <input type="email" />
            </div>

            <div class="form-control">
              <label>Phone Number *</label>
              <input type="text" />
            </div>

            <div class="form-control">
              <label>City *</label>
              <select>
                <option value="">Please select</option>
              </select>
            </div>

            <div class="form-control">
              <label>District *</label>
              <select>
                <option value="">Please select</option>
              </select>
            </div>

            <div class="form-control full">
              <label>Address *</label>
              <input type="text" />
            </div>

          </div>
        </section>

        <section class="checkout-box">
          <h2 class="checkout-title">Payment details</h2>

          <div class="form-grid">

            <div class="form-control full">
              <label>Card Holder Name *</label>
              <input type="text" />
            </div>

            <div class="form-control full">
              <label>Card Number *</label>
              <input type="text" placeholder="0000 0000 0000 0000" />
            </div>

            <div class="form-control">
              <label>Expiry Date *</label>
              <input type="text" placeholder="MM / YY" />
            </div>

            <div class="form-control">
              <label>CVV *</label>
              <input type="text" placeholder="XXX" />
            </div>

          </div>

          <button class="pay-btn">PAY NOW</button>
        </section>

      </div>

      <div class="checkout-right">
        <section class="summary-box">

          <h3 class="summary-title">Shopping cart summary</h3>

          <div
            v-for="(item, index) in cart.items"
            :key="item.id"
            class="summary-item"
          >
            <img :src="item.image" class="summary-img" />

            <div class="summary-info">
              <strong>{{ item.title }}</strong>
              <div>{{ item.price }} TL</div>
            </div>

            <div class="qty-box">
              <button @click="decrement(index)">-</button>
              <span>{{ item.quantity }}</span>
              <button @click="increment(index)">+</button>
            </div>

            <div class="summary-total">
              {{ (item.price * item.quantity).toFixed(2) }} TL
            </div>
          </div>

          <div class="summary-line">
            <span>Subtotal</span>
            <span>{{ cart.totalPrice.toFixed(2) }} TL</span>
          </div>

          <div class="summary-line">
            <span>Shipping</span>
            <span>0 TL</span>
          </div>

          <div class="summary-line total">
            <span>Total</span>
            <strong>{{ (cart.totalPrice + 0).toFixed(2) }} TL</strong>
          </div>

        </section>
      </div>

    </div>

  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";

const cart = useCartStore();

const increment = (i) => cart.incrementQuantity(i);
const decrement = (i) => cart.decrementQuantity(i);
</script>

<style scoped>

.checkout-wrapper {
  width: 100%;
  background: #fff;
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

.checkout-container {
  width: 1250px;
  display: flex;
  gap: 40px;
}

.checkout-left {
  flex: 2;
}

.checkout-box {
  background: #fff;
  border: 1px solid #e6e6e6;
  padding: 20px 24px;
  border-radius: 6px;
  margin-bottom: 28px;
}

.checkout-title {
  margin: 0 0 16px;
  font-size: 18px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.form-control {
  display: flex;
  flex-direction: column;
}

.form-control.full {
  grid-column: span 2;
}

.form-control label {
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 600;
}

.form-control input,
.form-control select {
  border: 1px solid #ccc;
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 14px;
}

.pay-btn {
  width: 100%;
  margin-top: 20px;
  background: #ff3f8c;
  color: white;
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.checkout-right {
  flex: 1;
}

.summary-box {
  background: #fff;
  border: 1px solid #e6e6e6;
  padding: 20px 24px;
  border-radius: 6px;
}

.summary-title {
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 600;
}

.summary-item {
  display: grid;
  grid-template-columns: 60px 1fr auto auto;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.summary-img {
  width: 55px;
  height: 55px;
  object-fit: contain;
}

.summary-info {
  font-size: 13px;
}

.qty-box {
  display: flex;
  align-items: center;
  gap: 6px;
}

.qty-box button {
  width: 22px;
  height: 22px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}

.summary-total {
  min-width: 70px;
  text-align: right;
  font-size: 14px;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 14px;
}

.summary-line.total strong {
  font-size: 16px;
}

</style>