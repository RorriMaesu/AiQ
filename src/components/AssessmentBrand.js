import React from 'react';

const BrandContent = () => (
  <>
    <span className="assessment-brand-symbol" aria-hidden="true"><i /></span>
    <span className="assessment-brand-wordmark">AiQ</span>
    <span className="assessment-brand-descriptor">Cognitive Assessment</span>
  </>
);

const AssessmentBrand = ({ href = '#top', onClick, label = 'AiQ Cognitive Assessment home' }) => {
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
