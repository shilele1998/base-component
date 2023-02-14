import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoList = () => {
  const id = useMemo(() => {
    return v4();
  }, []);
  const prefixCls = 'ka-component-empty-image';

  return (
    <svg
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(prefixCls, `${prefixCls}-no-list`)}
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.458 223.1 151.77L223.099 152L7.36449 152L7.36035 151.77C7.36035 126.711 54.6943 106.35 113.447 105.946L115.23 105.939Z"
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
        d="M143.955 44.542C143.955 40.823 146.97 37.8081 150.689 37.8081C154.408 37.8081 157.423 40.823 157.423 44.542V55.2088H143.955V44.542Z"
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
        d="M193.098 50.6389C193.098 50.6389 192.834 65.2472 182.33 73.1112"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M195.527 67.2976C195.527 67.2976 192.504 77.6314 184.17 82.784"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M170.946 90.7188C173.835 90.7188 176.19 89.7084 177.405 87.9481C177.977 87.1209 178.292 86.1414 178.345 85.0366C178.386 84.1526 178.257 83.1847 177.961 82.1473C177.929 82.0355 177.773 82.0287 177.732 82.1377C176.37 85.7789 172.919 88.5834 168.959 88.5834C168.959 88.5834 172.781 87.5759 175.183 84.4572C175.185 84.4553 175.216 84.4158 175.272 84.3415C175.754 83.6946 176.175 82.96 176.489 82.128C176.977 80.9664 177.431 79.4104 177.505 77.5468C177.517 77.2586 177.29 77.0166 177.001 77.0166H176.361C176.071 77.0166 175.839 77.2615 175.858 77.5526C175.899 78.185 175.907 79.3072 175.612 80.5335C174.865 80.4332 174.197 80.3831 173.595 80.3831C172.023 80.3831 170.903 80.7244 170.074 81.4561C169.331 82.1126 168.922 82.9928 168.489 83.9251C167.826 85.3499 167.075 86.9647 164.897 88.2113C164.773 88.2826 164.691 88.4128 164.683 88.5554C164.672 88.701 164.736 88.8389 164.85 88.9256C166.33 90.0478 168.609 90.7188 170.946 90.7188Z"
        fill={`url(#paint5_linear_${id})`}
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
          x1="167.335"
          y1="77.0166"
          x2="167.335"
          y2="85.3993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoList;
