import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoProject = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-data`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.396 223.1 151.631L223.099 151.861L7.36449 151.861L7.36035 151.631C7.36035 126.648 54.6943 106.349 113.447 105.945L115.23 105.939Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M65.5508 56.0464C65.5508 51.9885 68.846 48.699 72.9108 48.699H103.096C106.449 48.699 109.378 50.9619 110.22 54.2025L112.011 61.0978H151.111C155.176 61.0978 158.471 64.3873 158.471 68.4452V115.744C158.471 119.802 155.176 123.092 151.111 123.092H79.3508C75.286 123.092 71.9908 119.802 71.9908 115.744L65.5508 56.0464Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <rect
        width="49.2144"
        height="61.5418"
        rx="7.36"
        transform="matrix(0.966036 -0.258407 0.259232 0.965815 72.3994 55.2681)"
        fill={`url(#paint2_linear_${id})`}
      />
      <rect
        width="34.0361"
        height="3.67414"
        rx="1.83707"
        transform="matrix(0.966036 -0.258407 0.259232 0.965815 82.8066 65.1218)"
        fill="white"
      />
      <rect
        width="34.0361"
        height="3.67414"
        rx="1.83707"
        transform="matrix(0.966036 -0.258407 0.259232 0.965815 85.6621 74.9116)"
        fill="white"
      />
      <g filter={`url(#filter0_d_${id}`}>
        <rect
          width="24.839"
          height="33.9833"
          rx="7.36"
          transform="matrix(0.98773 0.156174 -0.156695 0.987647 105.503 46.9075)"
          fill={`url(#paint3_linear_${id})`}
        />
      </g>
      <rect
        width="49.2179"
        height="61.5373"
        rx="7.36"
        transform="matrix(0.98773 0.156174 -0.156695 0.987647 107.59 33.7542)"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <rect
        width="25.7589"
        height="3.67387"
        rx="1.83693"
        transform="matrix(0.98773 0.156174 -0.156695 0.987647 113.083 46.9822)"
        fill="white"
      />
      <rect
        width="34.0386"
        height="3.67387"
        rx="1.83694"
        transform="matrix(0.98773 0.156174 -0.156695 0.987647 111.703 57.0847)"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M76.8653 74.4915C77.2987 70.7824 80.4412 67.9858 84.1755 67.9858H155.835C160.239 67.9858 163.657 71.8266 163.146 76.2002L158.426 116.586C157.992 120.295 154.85 123.092 151.116 123.092H79.4558C75.0524 123.092 71.6344 119.251 72.1455 114.877L76.8653 74.4915Z"
        fill={`url(#paint5_linear_${id})`}
      />
      <path
        d="M56.0167 60.1516C56.0167 60.1516 55.753 74.7157 45.249 82.556"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M182.517 69.7952C182.517 69.7952 182.253 84.3593 171.749 92.1995"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M58.4471 76.7598C58.4471 76.7598 55.4236 87.0623 47.0898 92.1994"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.8657 100.11C36.755 100.11 39.11 99.1032 40.325 97.3482C40.8969 96.5235 41.2118 95.547 41.2647 94.4455C41.3061 93.5641 41.1771 92.5991 40.8806 91.5649C40.8488 91.4534 40.6928 91.4467 40.6524 91.5553C39.29 95.1856 35.8394 97.9815 31.8794 97.9815C31.8794 97.9815 35.7007 96.9772 38.1029 93.8678C38.1048 93.8659 38.1356 93.8265 38.1915 93.7525C38.6738 93.1076 39.0946 92.3752 39.4094 91.5457C39.8966 90.3875 40.351 88.8362 40.4252 86.9783C40.4367 86.691 40.2095 86.4497 39.9206 86.4497H39.2814C38.9906 86.4497 38.7586 86.6938 38.7778 86.9841C38.8192 87.6146 38.8269 88.7334 38.5323 89.956C37.7852 89.856 37.117 89.806 36.5153 89.806C34.943 89.806 33.8233 90.1463 32.9943 90.8758C32.2511 91.5303 31.8419 92.4079 31.4086 93.3373C30.7462 94.7579 29.9952 96.3678 27.8174 97.6105C27.6932 97.6817 27.6114 97.8114 27.6027 97.9537C27.5921 98.0988 27.6557 98.2363 27.7702 98.3228C29.25 99.4415 31.529 100.11 33.8657 100.11Z"
        fill={`url(#paint6_linear_${id})`}
      />
      <rect
        x="113.62"
        y="17.9314"
        width="3.22"
        height="6.88822"
        rx="0.46"
        fill="#EDEEF2"
      />
      <rect
        width="3.21862"
        height="6.89116"
        rx="0.46"
        transform="matrix(0.866395 0.49936 -0.500641 0.865655 128.809 20.8667)"
        fill="#EDEEF2"
      />
      <rect
        width="3.21863"
        height="6.89116"
        rx="0.46"
        transform="matrix(-0.866395 0.499359 0.500641 0.865655 101.467 20.8667)"
        fill="#EDEEF2"
      />
      <defs>
        <filter
          id={`filter0_d_${id}`}
          x="92.0393"
          y="40.1456"
          width="46.1363"
          height="53.7264"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2.76"
            operator="dilate"
            in="SourceAlpha"
            result={`effect1_dropShadow_${id}`}
          />
          <feOffset dy="1.38" />
          <feGaussianBlur stdDeviation="3.22" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_${id}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect1_dropShadow_${id}`}
            result="shape"
          />
        </filter>
        <linearGradient
          id={`paint0_linear_${id}`}
          x1="195.617"
          y1="140.161"
          x2="195.617"
          y2="105.939"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.01" />
          <stop offset="1" stopColor="#E3E4E6" />
        </linearGradient>
        <linearGradient
          id={`paint1_linear_${id}`}
          x1="66.3668"
          y1="48.699"
          x2="66.3668"
          y2="121.785"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D9DBE2" />
          <stop offset="1" stopColor="#DADCE3" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="15.0048"
          y1="-15.1597"
          x2="-16.8849"
          y2="20.7608"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8EAED" />
          <stop offset="1" stopColor="#F0F2F5" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="0"
          y1="0"
          x2="0"
          y2="33.9833"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEEF1" />
          <stop offset="1" stopColor="#EDEEF1" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="24.609"
          y1="0"
          x2="24.609"
          y2="61.5373"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6395FF" />
          <stop offset="1" stopColor="#3A6FF8" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="0"
          y1="0"
          x2="0"
          y2="61.4583"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="24.609"
          y1="0"
          x2="24.609"
          y2="61.5373"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.46875" className={`${prefixCls}-linear-color-1`} />
          <stop offset="0.998206" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="71.1855"
          y1="67.9858"
          x2="71.1855"
          y2="123.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E6E7EB" />
          <stop offset="1" stopColor="#DEE0E3" />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="30.2552"
          y1="86.4497"
          x2="30.2552"
          y2="94.8071"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoProject;
