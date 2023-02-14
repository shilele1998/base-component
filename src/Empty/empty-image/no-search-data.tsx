import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoSearchData = ({ colorful = false }) => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      className={classnames(prefixCls, `${prefixCls}-no-search-data`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.458 223.1 151.77L223.099 152L7.36449 152L7.36035 151.77C7.36035 126.711 54.6943 106.35 113.447 105.945L115.23 105.939Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M77.7402 37.7599C77.7402 33.6951 81.0354 30.3999 85.1002 30.3999H156.4C161.481 30.3999 165.6 34.5189 165.6 39.5999V51.1284C165.6 51.6365 165.188 52.0484 164.68 52.0484H77.7402V37.7599Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <rect
        x="77.7402"
        y="30.3999"
        width="71.76"
        height="90.7394"
        rx="7.36"
        fill={`url(#paint2_linear_${id})`}
      />
      <rect
        x="88.7803"
        y="49.7454"
        width="49.68"
        height="5.98788"
        rx="2.99"
        fill="white"
      />
      <rect
        x="88.7803"
        y="64.4849"
        width="49.68"
        height="5.98788"
        rx="2.99"
        fill="white"
      />
      <rect
        x="88.7803"
        y="79.6848"
        width="31.28"
        height="5.98788"
        rx="2.99"
        fill="white"
      />
      <path
        d="M150.19 40.9854C150.19 37.4287 153.074 34.5454 156.63 34.5454C160.187 34.5454 163.07 37.4287 163.07 40.9854V51.1272H150.19V40.9854Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M130.18 100.412V111.927C130.18 117.015 134.299 121.139 139.38 121.139H73.6002C69.5354 121.139 66.2402 117.84 66.2402 113.77V100.412H130.18Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M163.758 110.162C162.436 108.458 162.739 106.003 164.435 104.671C166.143 103.331 168.614 103.636 169.945 105.352L182.379 121.384C183.701 123.089 183.398 125.543 181.701 126.875C179.993 128.216 177.522 127.911 176.192 126.195L163.758 110.162Z"
        className={`${prefixCls}-no-search-data-path`}
        fill={`url(#paint5_linear_${id})`}
      />
      <mask
        id={`mask0_${id}`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="162"
        y="103"
        width="22"
        height="25"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M163.585 111.56C161.927 109.42 162.309 106.34 164.439 104.669C166.584 102.986 169.687 103.371 171.356 105.527L182.553 119.987C184.21 122.127 183.828 125.207 181.698 126.878C179.553 128.561 176.451 128.176 174.782 126.02L163.585 111.56Z"
          fill="white"
        />
      </mask>
      <g mask={`url(#mask0_${id})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M168.969 105.226C168.969 105.226 167.273 108.639 164.359 110.551L162.389 108.052L167.832 104.032L168.969 105.226Z"
          fill="black"
          fillOpacity="0.1"
        />
      </g>
      <ellipse
        cx="152.951"
        cy="88.6667"
        rx="22.517"
        ry="22.8"
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <g filter={`url(#filter0_d_${id})`}>
        <ellipse
          cx="152.698"
          cy="88.6667"
          rx="16.192"
          ry="16.2133"
          className={`${prefixCls}-no-search-data-circle`}
        />
      </g>
      <path
        d="M56.0177 52.9419C56.0177 52.9419 55.754 67.5501 45.25 75.4142"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M58.4471 69.6006C58.4471 69.6006 55.4236 79.9343 47.0898 85.087"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.8657 93.0218C36.755 93.0218 39.11 92.0114 40.325 90.251C40.8969 89.4239 41.2118 88.4444 41.2647 87.3396C41.3061 86.4555 41.1771 85.4876 40.8806 84.4503C40.8488 84.3385 40.6928 84.3317 40.6524 84.4407C39.29 88.0819 35.8394 90.8864 31.8794 90.8864C31.8794 90.8864 35.7007 89.8789 38.1029 86.7602C38.1048 86.7583 38.1356 86.7187 38.1915 86.6445C38.6738 85.9976 39.0946 85.263 39.4094 84.431C39.8966 83.2693 40.351 81.7133 40.4252 79.8498C40.4367 79.5616 40.2095 79.3196 39.9206 79.3196H39.2814C38.9906 79.3196 38.7586 79.5645 38.7778 79.8556C38.8192 80.488 38.8269 81.6102 38.5323 82.8365C37.7852 82.7362 37.117 82.6861 36.5153 82.6861C34.943 82.6861 33.8233 83.0274 32.9943 83.7591C32.2511 84.4156 31.8419 85.2958 31.4086 86.228C30.7462 87.6529 29.9952 89.2677 27.8174 90.5142C27.6932 90.5856 27.6114 90.7157 27.6027 90.8584C27.5921 91.004 27.6557 91.1418 27.7702 91.2286C29.25 92.3508 31.529 93.0218 33.8657 93.0218Z"
        fill={`url(#paint6_linear_${id})`}
      />
      <defs>
        <filter
          id={`filter0_d_${id}`}
          x="135.586"
          y="71.9934"
          width="34.2238"
          height="34.2668"
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
          <feOffset dy="0.46" />
          <feGaussianBlur stdDeviation="0.46" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
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
          x1="46.5108"
          y1="30.3999"
          x2="46.5108"
          y2="67.4381"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="77.7402"
          y1="30.3999"
          x2="77.7402"
          y2="121.139"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="150.304"
          y1="34.5454"
          x2="150.304"
          y2="50.836"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7D8DB" />
          <stop offset="1" stopColor="#DCDDE0" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="66.2402"
          y1="100.412"
          x2="66.2402"
          y2="121.139"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="152.951"
          y1="65.8667"
          x2="152.951"
          y2="111.467"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F2F5" />
          <stop offset="1" stopColor="#E7E9ED" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="152.951"
          y1="65.8667"
          x2="152.951"
          y2="111.467"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="30.2552"
          y1="79.3196"
          x2="30.2552"
          y2="87.7023"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>

        <linearGradient
          xmlns="http://www.w3.org/2000/svg"
          id={`paint5_linear_${id}`}
          x1="167.533"
          y1="141.106"
          x2="161.294"
          y2="145.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F2F5" />
          <stop offset="1" stopColor="#E7E9ED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoSearchData;
