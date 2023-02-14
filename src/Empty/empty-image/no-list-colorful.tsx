import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoListColorful = () => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(
        prefixCls,
        `${prefixCls}-no-list`,
        `${prefixCls}-colorful`,
      )}
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.458 223.1 151.77L223.099 152V152L7.36449 152L7.36035 151.77C7.36035 126.711 54.6943 106.35 113.447 105.946L115.23 105.939Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <path
        d="M76.1816 42.1229C76.1816 38.0581 79.4768 34.7629 83.5416 34.7629H149.961C155.042 34.7629 159.161 38.8819 159.161 43.9629V54.2887C159.161 54.7968 158.749 55.2087 158.241 55.2087H76.1816V42.1229Z"
        fill={`url(#paint1_linear_${id})`}
      />
      <rect
        x="76.1816"
        y="34.7629"
        width="67.7733"
        height="85.6983"
        rx="7.36"
        fill={`url(#paint2_linear_${id})`}
      />
      <rect
        x="86.6084"
        y="53.0337"
        width="46.92"
        height="5.65522"
        rx="2.82761"
        fill="white"
      />
      <rect
        x="86.6084"
        y="66.9541"
        width="46.92"
        height="5.65522"
        rx="2.82761"
        fill="white"
      />
      <rect
        x="86.6084"
        y="81.3098"
        width="46.92"
        height="5.65521"
        rx="2.82761"
        fill="white"
      />
      <path
        d="M143.955 44.542C143.955 40.823 146.97 37.8081 150.689 37.8081V37.8081C154.408 37.8081 157.423 40.823 157.423 44.542V55.2088H143.955V44.542Z"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M125.708 100.885V111.761C125.708 116.566 129.598 120.461 134.397 120.461H72.2714C68.4324 120.461 65.3203 117.345 65.3203 113.501V100.885H125.708Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <path
        d="M59.5146 56.7004C59.5146 56.7004 58.8228 72.264 52.8934 71.0568C51.4918 70.7714 51.4801 68.8884 52.4003 68.3435C53.3205 67.7986 55.7535 67.3201 55.7535 71.8944C55.7535 76.4686 50.7307 79.0812 47.3301 79.0812"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M196.098 30.6389C196.098 30.6389 195.834 45.2472 185.33 53.1112"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M198.527 47.2976C198.527 47.2976 195.504 57.6314 187.17 62.784"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M173.946 70.7188C176.835 70.7188 179.19 69.7084 180.405 67.9481C180.977 67.1209 181.292 66.1414 181.345 65.0366C181.386 64.1526 181.257 63.1847 180.961 62.1473C180.929 62.0355 180.773 62.0287 180.732 62.1377C179.37 65.7789 175.919 68.5834 171.959 68.5834C171.959 68.5834 175.781 67.5759 178.183 64.4572C178.185 64.4553 178.216 64.4158 178.272 64.3415C178.754 63.6946 179.175 62.96 179.489 62.128C179.977 60.9664 180.431 59.4104 180.505 57.5468C180.517 57.2586 180.29 57.0166 180.001 57.0166H179.361C179.071 57.0166 178.839 57.2615 178.858 57.5526C178.899 58.185 178.907 59.3072 178.612 60.5335C177.865 60.4332 177.197 60.3831 176.595 60.3831C175.023 60.3831 173.903 60.7244 173.074 61.4561C172.331 62.1126 171.922 62.9928 171.489 63.9251C170.826 65.3499 170.075 66.9647 167.897 68.2113C167.773 68.2826 167.691 68.4127 167.683 68.5554C167.672 68.701 167.736 68.8389 167.85 68.9256C169.33 70.0478 171.609 70.7188 173.946 70.7188Z"
        fill={`url(#paint5_linear_${id})`}
      />
      <circle
        cx="157"
        cy="99"
        r="21"
        fill={`url(#paint_linear_colorful_${id})`}
      />
      <path
        d="M157 90.5V100.5H167"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
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
          x1="46.6872"
          y1="34.7629"
          x2="46.6872"
          y2="69.7435"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="76.1816"
          y1="34.7629"
          x2="76.1816"
          y2="120.461"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="144.073"
          y1="37.8081"
          x2="144.073"
          y2="54.9031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D7D8DB" />
          <stop offset="1" stopColor="#DCDDE0" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="65.3203"
          y1="100.885"
          x2="65.3203"
          y2="120.461"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint5_linear_${id}`}
          x1="170.335"
          y1="57.0166"
          x2="170.335"
          y2="65.3993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="157"
          y1="78"
          x2="157"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoListColorful;
