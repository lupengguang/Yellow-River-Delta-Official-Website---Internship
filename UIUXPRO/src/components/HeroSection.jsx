import React from 'react';

function HeroSection() {
  return (
    <section className="relative">
      {/* 背景图片 */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Yellow%20River%20Delta%20wetland%20landscape%2C%20many%20crane%20birds%2C%20sunset%2C%20golden%20light%2C%20professional%20photography&image_size=landscape_16_9" 
          alt="黄河三角洲湿地" 
          className="w-full h-full object-cover"
        />
        
        {/* 文字叠加层 */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              黄河三角洲资源环境科学数据平台
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Yellow River Delta Resource and Environmental Science Data Platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;