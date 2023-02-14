import React, { useMemo } from 'react';
import classnames from 'classnames';
import { v4 } from 'uuid';

const NoSource = ({ colorful = false }) => {
  const prefixCls = 'ka-component-empty-image';

  const id = useMemo(() => {
    return v4();
  }, []);

  return (
    <svg
      viewBox="0 0 230 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames(prefixCls, `${prefixCls}-404`, {
        [`${prefixCls}-colorful`]: colorful,
      })}
      key={id}
    >
      <path
        opacity="0.6"
        d="M115.23 105.939C174.805 105.939 223.1 126.458 223.1 151.77L223.099 152V152L7.36449 152L7.36035 151.77C7.36035 126.711 54.6943 106.35 113.447 105.946L115.23 105.939Z"
        fill={`url(#paint0_linear_${id})`}
      />
      <ellipse
        cx="79.2493"
        cy="17.9289"
        rx="2.92509"
        ry="2.92894"
        fill={`url(#paint1_linear_${id})`}
      />
      <ellipse
        cx="91.5518"
        cy="45.6048"
        rx="34.1261"
        ry="23.9197"
        fill={`url(#paint2_linear_${id})`}
      />
      <ellipse
        rx="47.7807"
        ry="22.8895"
        transform="matrix(0.965841 -0.259137 0.258501 0.966011 94.0645 61.6691)"
        fill={`url(#paint3_linear_${id})`}
      />
      <path
        opacity="0.6"
        d="M72.8369 73.4947L72.9141 134.636L173.999 116.538L119.174 59.8925L72.8369 73.4947Z"
        fill={`url(#paint4_linear_${id})`}
      />
      <ellipse
        opacity="0.8"
        rx="29.2535"
        ry="12.691"
        transform="matrix(0.965841 -0.259137 0.258501 0.966011 96.6393 68.5449)"
        fill="#D7D8DB"
      />
      <g opacity="0.8" filter={`url(#filter0_d_${id})`}>
        <ellipse
          rx="24.3556"
          ry="9.75337"
          transform="matrix(0.965841 -0.259137 0.258501 0.966011 96.5137 68.0733)"
          fill="#FCFCFC"
        />
      </g>
      <g opacity="0.8" filter={`url(#filter1_d_${id})`}>
        <ellipse
          cx="83.3964"
          cy="47.0478"
          rx="3.16885"
          ry="3.17302"
          fill="white"
        />
      </g>
      <g opacity="0.8" filter={`url(#filter2_d_${id})`}>
        <ellipse
          cx="99.9716"
          cy="43.1429"
          rx="3.16885"
          ry="3.17302"
          fill="white"
        />
      </g>
      <g opacity="0.8" filter={`url(#filter3_d_${id})`}>
        <ellipse
          cx="119.473"
          cy="43.1429"
          rx="3.16885"
          ry="3.17302"
          fill="white"
        />
      </g>
      <g opacity="0.8" filter={`url(#filter4_d_${id})`}>
        <ellipse
          cx="69.745"
          cy="55.3466"
          rx="3.16885"
          ry="3.17302"
          fill="white"
        />
      </g>
      <g opacity="0.8" filter={`url(#filter5_d_${id})`}>
        <ellipse
          cx="58.5321"
          cy="63.1573"
          rx="3.16885"
          ry="3.17302"
          fill="white"
        />
      </g>
      <rect
        x="124"
        y="107.204"
        width="4"
        height="12"
        rx="2"
        fill={
          colorful
            ? `url(#paint2_linear_colorful_${id})`
            : `url(#paint2_linear_${id})`
        }
      />
      <rect
        x="157"
        y="107.204"
        width="4"
        height="12"
        rx="2"
        fill={
          colorful
            ? `url(#paint2_linear_colorful_${id})`
            : `url(#paint2_linear_${id})`
        }
      />
      <path
        d="M116 92.56C116 90.1686 116 88.973 116.495 88.073C116.86 87.4078 117.408 86.8604 118.073 86.4948C118.973 86 120.169 86 122.56 86H162.44C164.831 86 166.027 86 166.927 86.4948C167.592 86.8604 168.14 87.4078 168.505 88.073C169 88.973 169 90.1686 169 92.56V108.44C169 110.831 169 112.027 168.505 112.927C168.14 113.592 167.592 114.14 166.927 114.505C166.027 115 164.831 115 162.44 115H122.56C120.169 115 118.973 115 118.073 114.505C117.408 114.14 116.86 113.592 116.495 112.927C116 112.027 116 110.831 116 108.44V92.56Z"
        // fill={`url(#paint7_linear_${id})`}
        fill={
          colorful
            ? `url(#paint_linear_colorful_${id})`
            : `url(#paint_linear_${id})`
        }
      />
      <path
        opacity="0.9"
        d="M129.895 107V104.984H124.261V102.698L128.347 94.04H131.155L127.069 102.698H129.895V99.458H132.379V102.698H133.531V104.984H132.379V107H129.895ZM142.502 107.27C141.542 107.27 140.702 107.069 139.982 106.667C139.262 106.265 138.701 105.704 138.299 104.984C137.897 104.264 137.696 103.424 137.696 102.464V98.576C137.696 97.616 137.897 96.776 138.299 96.056C138.701 95.336 139.262 94.775 139.982 94.373C140.702 93.971 141.542 93.77 142.502 93.77C143.462 93.77 144.302 93.971 145.022 94.373C145.742 94.775 146.303 95.336 146.705 96.056C147.107 96.776 147.308 97.616 147.308 98.576V102.464C147.308 103.424 147.107 104.264 146.705 104.984C146.303 105.704 145.742 106.265 145.022 106.667C144.302 107.069 143.462 107.27 142.502 107.27ZM142.502 104.948C142.934 104.948 143.324 104.846 143.672 104.642C144.02 104.438 144.296 104.162 144.5 103.814C144.704 103.466 144.806 103.076 144.806 102.644V98.378C144.806 97.946 144.704 97.556 144.5 97.208C144.296 96.86 144.02 96.584 143.672 96.38C143.324 96.176 142.934 96.074 142.502 96.074C142.07 96.074 141.68 96.176 141.332 96.38C140.984 96.584 140.708 96.86 140.504 97.208C140.3 97.556 140.198 97.946 140.198 98.378V102.644C140.198 103.076 140.3 103.466 140.504 103.814C140.708 104.162 140.984 104.438 141.332 104.642C141.68 104.846 142.07 104.948 142.502 104.948ZM157.098 107V104.984H151.464V102.698L155.55 94.04H158.358L154.272 102.698H157.098V99.458H159.582V102.698H160.734V104.984H159.582V107H157.098Z"
        fill="white"
      />
      <path
        d="M21.1348 72.6715C21.1348 72.6715 32.0291 71.6827 29.5522 65.693C28.9667 64.2772 26.9891 64.6493 26.6054 65.7284C26.2218 66.8074 26.2165 69.4639 31.0148 68.53C35.813 67.5961 37.5279 61.7801 36.8336 58.2036"
        stroke="#EBEDF0"
        strokeWidth="0.9844"
        strokeLinecap="round"
      />
      <path
        d="M188.416 25C188.416 25 188.152 39.6082 177.648 47.4723"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        d="M190.846 41.6586C190.846 41.6586 187.822 51.9923 179.488 57.145"
        stroke="#EBEDF0"
        strokeWidth="0.92"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M166.264 65.0799C169.153 65.0799 171.508 64.0695 172.723 62.3092C173.295 61.482 173.61 60.5025 173.663 59.3977C173.705 58.5137 173.576 57.5457 173.279 56.5084C173.247 56.3966 173.091 56.3898 173.051 56.4988C171.688 60.14 168.238 62.9445 164.278 62.9445C164.278 62.9445 168.099 61.937 170.501 58.8183C170.503 58.8164 170.534 58.7768 170.59 58.7026C171.072 58.0557 171.493 57.3211 171.808 56.4891C172.295 55.3274 172.749 53.7714 172.824 51.9079C172.835 51.6197 172.608 51.3777 172.319 51.3777H171.68C171.389 51.3777 171.157 51.6226 171.176 51.9137C171.218 52.5461 171.225 53.6683 170.931 54.8946C170.184 54.7943 169.515 54.7442 168.914 54.7442C167.341 54.7442 166.222 55.0855 165.393 55.8172C164.649 56.4737 164.24 57.3539 163.807 58.2861C163.145 59.711 162.394 61.3258 160.216 62.5723C160.092 62.6437 160.01 62.7738 160.001 62.9165C159.991 63.0621 160.054 63.1999 160.169 63.2867C161.648 64.4089 163.927 65.0799 166.264 65.0799Z"
        fill={`url(#paint8_linear_${id})`}
      />
      <defs>
        <filter
          id={`filter0_d_${id}`}
          x="71.5384"
          y="56.2933"
          width="49.9505"
          height="25.3134"
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
          <feOffset dy="0.876725" />
          <feGaussianBlur stdDeviation="0.657544" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.912398 0 0 0 0 0.918604 0 0 0 0 0.931018 0 0 0 1 0"
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
        <filter
          id={`filter1_d_${id}`}
          x="79.3508"
          y="43.8748"
          width="8.09134"
          height="8.09952"
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
          <feOffset dy="0.876725" />
          <feGaussianBlur stdDeviation="0.438362" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.912398 0 0 0 0 0.918604 0 0 0 0 0.931018 0 0 0 1 0"
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
        <filter
          id={`filter2_d_${id}`}
          x="95.926"
          y="39.9698"
          width="8.09134"
          height="8.09952"
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
          <feOffset dy="0.876725" />
          <feGaussianBlur stdDeviation="0.438362" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.912398 0 0 0 0 0.918604 0 0 0 0 0.931018 0 0 0 1 0"
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
        <filter
          id={`filter3_d_${id}`}
          x="115.427"
          y="39.9698"
          width="8.09134"
          height="8.09952"
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
          <feOffset dy="0.876725" />
          <feGaussianBlur stdDeviation="0.438362" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.912398 0 0 0 0 0.918604 0 0 0 0 0.931018 0 0 0 1 0"
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
        <filter
          id={`filter4_d_${id}`}
          x="65.6994"
          y="52.1736"
          width="8.09134"
          height="8.09952"
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
          <feOffset dy="0.876725" />
          <feGaussianBlur stdDeviation="0.438362" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.912398 0 0 0 0 0.918604 0 0 0 0 0.931018 0 0 0 1 0"
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
        <filter
          id={`filter5_d_${id}`}
          x="54.4866"
          y="59.9843"
          width="8.09134"
          height="8.09952"
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
          <feOffset dy="0.876725" />
          <feGaussianBlur stdDeviation="0.438362" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.912398 0 0 0 0 0.918604 0 0 0 0 0.931018 0 0 0 1 0"
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
          x1="84.6662"
          y1="18.885"
          x2="80.7185"
          y2="13.1128"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F2F5" />
          <stop offset="1" stopColor="#D7D8DB" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="128.42"
          y1="47.4713"
          x2="111.426"
          y2="8.32041"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2D3D6" />
          <stop offset="1" stopColor="#EBEDF0" />
        </linearGradient>
        <linearGradient
          id={`paint3_linear_${id}`}
          x1="-8.50521"
          y1="-2.72634"
          x2="-6.87384"
          y2="47.6523"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F0F2F5" />
          <stop offset="1" stopColor="#D7D8DB" />
        </linearGradient>
        <linearGradient
          id={`paint4_linear_${id}`}
          x1="67.116"
          y1="72.9351"
          x2="81.4315"
          y2="128.301"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#DBE0E8" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_${id}`}
          x1="157"
          y1="107.204"
          x2="157"
          y2="119.204"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EDEFF2" />
          <stop offset="1" stopColor="#E1E2E6" />
        </linearGradient>
        <linearGradient
          id={`paint2_linear_colorful_${id}`}
          className={`${prefixCls}-paint2-linear-colorful`}
          x1="126"
          y1="107.204"
          x2="126"
          y2="119.204"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint6_linear_${id}`}
          x1="159"
          y1="107.204"
          x2="159"
          y2="119.204"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6395FF" />
          <stop offset="1" stopColor="#3A6FF8" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_${id}`}
          x1="142.5"
          y1="86"
          x2="142.5"
          y2="115"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.3125" stopColor="#E3E4E9" />
          <stop offset="1" stopColor="#CDCFD5" />
        </linearGradient>
        <linearGradient
          id={`paint_linear_colorful_${id}`}
          className={`${prefixCls}-paint-linear-colorful`}
          x1="142.5"
          y1="86"
          x2="142.5"
          y2="115"
          gradientUnits="userSpaceOnUse"
        >
          <stop className={`${prefixCls}-linear-color-1`} />
          <stop offset="1" className={`${prefixCls}-linear-color-2`} />
        </linearGradient>
        <linearGradient
          id={`paint8_linear_${id}`}
          x1="162.654"
          y1="51.3777"
          x2="162.654"
          y2="59.7604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6F7F8" />
          <stop offset="1" stopColor="#EEF0F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NoSource;
