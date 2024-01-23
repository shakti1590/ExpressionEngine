import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExpressionEngineUI = () => {
  const [rules, setRules] = useState([
    {
      key: 'age',
      output: {
        value: 60,
        operator: '>=',
        score: 50,
      },
    },
  ]);
  const [combinator, setCombinator] = useState('and');

  const addExpression = () => {
    setRules([...rules, { key: 'age', output: { value: 40, operator: '>=', score: 100 } }]);
  };

  const deleteExpression = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleCombinatorChange = (e) => {
    setCombinator(e.target.value);
  };

  return (
    <div className="container mt-5 p-4 rounded">
      <h1 className="mb-4 text-center">Expression Engine</h1>
      <form>
        {rules.map((rule, index) => (
          <div key={index} className="mb-4 border p-3 rounded">
            <div className="mb-3">
              <label className="form-label">Rule Type</label>
              <select className="form-select">
                <option value="age">Age</option>
                <option value="credit_score">Credit Score</option>
                <option value="account_balance">Account Balance</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Operator</label>
              <select className="form-select">
                <option value=">">{'>'}</option>
                <option value="<">{'<'}</option>
                <option value=">=">{'>='}</option>
                <option value="<=">{'<='}</option>
                <option value="=">{'='}</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Value</label>
              <input type="text" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">Score</label>
              <input type="text" className="form-control" />
            </div>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteExpression(index)}
            >
              Delete
            </button>
          </div>
        ))}

        <div className="mb-3">
          <label className="form-label">Connector Type</label>
          <select
            className="form-select"
            value={combinator}
            onChange={handleCombinatorChange}
          >
            <option value="and">AND</option>
            <option value="or">OR</option>
          </select>
        </div>

        <button type="button" className="btn btn-primary" onClick={addExpression}>
          Add Expression
        </button>
      </form>
    </div>
  );
};

export default ExpressionEngineUI;