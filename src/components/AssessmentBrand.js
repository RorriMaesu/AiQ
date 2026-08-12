import React from 'react';

const BrandContent = () => (
  <>
    <span className="assessment-brand-wordmark">AIQ</span>
    <span className="assessment-brand-descriptor">Cognitive Assessment</span>
  </>
);

const AssessmentBrand = ({ href = '#top', onClick, label = 'AIQ Cognitive Assessment home' }) => {
  if (onClick) {
    return (
      <button className="assessment-brand" type="button" onClick={onClick} aria-label={label}>
        <BrandContent />
      </button>
    );
  }

  return (
    <a className="assessment-brand" href={href} aria-label={label}>
      <BrandContent />
    </a>
  );
};

export default AssessmentBrand;
