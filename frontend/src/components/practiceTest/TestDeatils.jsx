import React from "react";

const TestDeatils = () => {
  return (
    <div>
      <h3>Test Deatils</h3>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Test title
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Relvent title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </form>
    </div>
  );
};

export default TestDeatils;
