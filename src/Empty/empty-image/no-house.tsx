import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoHouseColorful = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-house`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.458 223.1 151.77L223.099 152L7.36449 152L7.36035 151.77C7.36035 126.711 54.6943 106.35 113.447 105.946L115.23 105.939Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M41.5327 78.9784C41.5327 78.9784 38.4902 93.2679 26.6806 98.9805"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M175.65 2.44824C175.65 2.44824 175.387 17.0565 164.883 24.9205"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M178.08 19.1069C178.08 19.1069 175.056 29.4407 166.723 34.5933"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M153.498 42.5281C156.388 42.5281 158.743 41.5178 159.958 39.7574C160.53 38.9302 160.845 37.9507 160.898 36.8459C160.939 35.9619 160.81 34.994 160.513 33.9567C160.482 33.8448 160.326 33.8381 160.285 33.947C158.923 37.5883 155.472 40.3927 151.512 40.3927C151.512 40.3927 155.334 39.3853 157.736 36.2665C157.738 36.2646 157.768 36.2251 157.824 36.1508C158.307 35.504 158.727 34.7694 159.042 33.9374C159.529 32.7757 159.984 31.2197 160.058 29.3562C160.07 29.0679 159.842 28.8259 159.553 28.8259H158.914C158.623 28.8259 158.391 29.0708 158.411 29.3619C158.452 29.9944 158.46 31.1165 158.165 32.3428C157.418 32.2426 156.75 32.1924 156.148 32.1924C154.576 32.1924 153.456 32.5337 152.627 33.2654C151.884 33.9219 151.475 34.8021 151.041 35.7344C150.379 37.1593 149.628 38.7741 147.45 40.0206C147.326 40.0919 147.244 40.2221 147.236 40.3648C147.225 40.5103 147.288 40.6482 147.403 40.735C148.883 41.8571 151.162 42.5281 153.498 42.5281Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <path
        d="M89.6396 29.2188H116.591C118.115 29.2188 119.351 30.4544 119.351 31.9787V120.323H89.6396V29.2188Z"
        fill={`url(#paint2_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68.7695 35.8856C68.7695 34.5848 69.6779 33.4605 70.9497 33.1872L89.1534 29.2753C90.872 28.906 92.4933 30.2159 92.4933 31.9737V117.563C92.4933 119.088 91.2576 120.323 89.7333 120.323H71.5295C70.0052 120.323 68.7695 119.088 68.7695 117.563V35.8856Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.5898 44.5342C75.5898 43.2228 76.5126 42.0925 77.7975 41.83L82.3609 40.8978C84.0719 40.5483 85.6733 41.8557 85.6733 43.602V47.6221C85.6733 48.9335 84.7506 50.0638 83.4657 50.3262L78.9022 51.2584C77.1913 51.608 75.5898 50.3006 75.5898 48.5543V44.5342Z"
        fill="#FAFCFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.5898 59.543C75.5898 58.2316 76.5126 57.1013 77.7975 56.8388L82.3609 55.9066C84.0719 55.5571 85.6733 56.8645 85.6733 58.6108V62.6309C85.6733 63.9423 84.7506 65.0726 83.4657 65.335L78.9022 66.2672C77.1913 66.6167 75.5898 65.3094 75.5898 63.5631V59.543Z"
        fill="#FAFCFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.5898 74.5518C75.5898 73.2404 76.5126 72.1101 77.7975 71.8476L82.3609 70.9154C84.0719 70.5659 85.6733 71.8732 85.6733 73.6196V77.6397C85.6733 78.9511 84.7506 80.0814 83.4657 80.3438L78.9022 81.276C77.1913 81.6255 75.5898 80.3182 75.5898 78.5719V74.5518Z"
        fill="#FAFCFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M75.5898 89.5603C75.5898 88.2489 76.5126 87.1186 77.7975 86.8561L82.3609 85.9239C84.0719 85.5744 85.6733 86.8818 85.6733 88.6281V92.6482C85.6733 93.9596 84.7506 95.0899 83.4657 95.3524L78.9022 96.2846C77.1913 96.6341 75.5898 95.3267 75.5898 93.5804V89.5603Z"
        fill="#FAFCFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M136.29 58.4773C136.29 56.6036 138.117 55.2744 139.9 55.8514L157.38 61.5093C158.519 61.8779 159.29 62.9383 159.29 64.1352V117.563C159.29 119.088 158.054 120.323 156.53 120.323H139.05C137.526 120.323 136.29 119.088 136.29 117.563L136.29 58.4773Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <rect
        x="110.237"
        y="55.7175"
        width="31.6815"
        height="64.6057"
        rx="2.76"
        fill={`url(#paint5_linear_${id})`}
      />
      <rect
        x="120.704"
        y="66.1477"
        width="10.7478"
        height="10.762"
        rx="2.76"
        fill="#FCFDFF"
      />
      <rect
        x="120.704"
        y="81.0332"
        width="10.7478"
        height="10.762"
        rx="2.76"
        fill="#FCFDFF"
      />
      <rect
        x="120.704"
        y="95.9189"
        width="10.7478"
        height="10.762"
        rx="2.76"
        fill="#FCFDFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M151.34 89.0127C151.611 71.355 158.836 54.74 167.44 54.74C176.044 54.74 183.269 71.355 183.54 89.0127C183.405 103.45 179.115 111.09 167.44 111.09C155.765 111.09 151.475 103.45 151.34 89.0127Z"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <rect
        x="165.977"
        y="70.1084"
        width="2.92727"
        height="50.4955"
        rx="1.46364"
        fill="white"
      />
      <rect
        x="162.247"
        y="76.3472"
        width="2.19545"
        height="7.31818"
        rx="1.09773"
        transform="rotate(-45 162.247 76.3472)"
        fill="white"
      />
      <rect
        width="2.28023"
        height="8.564"
        rx="1.14011"
        transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 174.416 84.5645)"
        fill="white"
      />
      <rect
        x="163.282"
        y="98.6047"
        width="2.19545"
        height="4.39091"
        rx="1.09773"
        transform="rotate(-45 163.282 98.6047)"
        fill="white"
      />
      <defs>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="140.265"
          x2="195.617"
          y2="105.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${id}`}
          x1="149.888"
          y1="28.8259"
          x2="149.888"
          y2="37.2086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="119.09"
          y1="118.723"
          x2="119.09"
          y2="29.2187"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C8C9CC" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="68.7695"
          y1="28.5576"
          x2="68.7695"
          y2="120.323"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="158.947"
          y1="119.17"
          x2="158.947"
          y2="55.4874"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4D6D9" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="110.237"
          y1="55.7175"
          x2="110.237"
          y2="120.323"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="169.987"
          y1="43.7798"
          x2="136.704"
          y2="53.7095"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F2F5" />
          <stop offset="1" stopColor="#E7E9ED" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="167.44"
          y1="54.74"
          x2="167.44"
          y2="111.09"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoHouseColorful;
