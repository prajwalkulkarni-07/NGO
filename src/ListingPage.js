import React, { useState } from 'react';
import './ListingPage.css';

function ListingPage() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [targetAmount, setTargetAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [beneficiaryInfo, setBeneficiaryInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 3) {
      // Submit all the data to the backend
      console.log('Listing created with the following details:');
      console.log('Title:', title);
      console.log('Description:', description);
      console.log('Category:', category);
      console.log('Images:', images);
      console.log('Target Amount:', targetAmount);
      console.log('Duration:', duration);
      console.log('Beneficiary Info:', beneficiaryInfo);
    } else {
      setStep(step + 1);
    }
  };

  const handleFileChange = (event) => {
    setImages([...images, ...event.target.files]);
  };

  return (
    <div className="listing-page">
      <div className="progress-bar">
        <div
          className={`progress-step ${step === 1 ? 'active' : ''}`}
          onClick={() => setStep(1)}
        >
          Step 1
        </div>
        <div
          className={`progress-step ${step === 2 ? 'active' : ''}`}
          onClick={() => setStep(2)}
        >
          Step 2
        </div>
        <div
          className={`progress-step ${step === 3 ? 'active' : ''}`}
          onClick={() => setStep(3)}
        >
          Step 3
        </div>
      </div>

      <div className="form-container">
        {step === 1 && (
          <div className="form-wrapper">
            <h2>Create Listing - Step 1</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  required
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  required
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>
              <label>
                Category:
                <select
                  name="category"
                  required
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="Education">Education</option>
                  <option value="Health">Health</option>
                  <option value="Environment">Environment</option>
                  {/* Add more categories */}
                </select>
              </label>
              <button type="submit" className="submit-button">
                Next
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="form-wrapper">
            <h2>Create Listing - Step 2</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Images:
                <input
                  type="file"
                  name="images"
                  multiple
                  required
                  onChange={handleFileChange}
                />
              </label>
              <label>
                Target Amount:
                <input
                  type="number"
                  name="targetAmount"
                  required
                  onChange={(e) => setTargetAmount(e.target.value)}
                />
              </label>
              <label>
                Duration:
                <input
                  type="text"
                  name="duration"
                  required
                  onChange={(e) => setDuration(e.target.value)}
                />
              </label>
              <button type="submit" className="submit-button">
                Next
              </button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="form-wrapper">
            <h2>Create Listing - Step 3</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Beneficiary Information:
                <textarea
                  name="beneficiaryInfo"
                  required
                  onChange={(e) => setBeneficiaryInfo(e.target.value)}
                ></textarea>
              </label>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ListingPage;