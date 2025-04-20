import React, { useRef, useEffect, useState } from 'react';

function Marquee({ direction }) {
  const containerRef = useRef(null);
  const [clonedImages, setClonedImages] = useState([]);


  const imageUrls = [
    "https://s3-alpha-sig.figma.com/img/01e6/b105/c7e29231137e8fad312d149bf7aac906?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ems2GMSSdWd~RAhUk6d03Xl1P4bxnfFU0~ddrs2rmbJThLLwSg8JiMaKzjMrRdNNmvhyfIqxkwXZtrQvdN~W3hj9FATmz~RTkAtjycqLMgqTJSYoyA~EEAP~0SEOJmPeISON3cTSeWr7d4htlgZ-xYeyHsVN9znfx8gUv~7ZnMvoraozLYH7XbKzeMXUcYiL~wt3SyoS83AQAEJDHjK6ryIB8gniyjKbqBRaui52GTFDSPP8MctsfwNrHQ7bEq-TFY2bJR8AzQ0FcJK8mm-aHPH~yAje3X~gS2ilzWXZkd5m47h2rLp3dDUKtfTK~4L8anxljJkEnI-libYUZ83jSg__",
    "https://s3-alpha-sig.figma.com/img/18e6/6976/b564cb6017176bec801cfdb1303fc863?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tlOgMg4LQ4d6iKAr~Yr-jlLBw97tYAIt7whIsTxJ5k8a6zibGyiJqzTS0a4RP9uxwAJU19nbiaCMUGiV0baVhrn3YREKW9qir4pFE0Ibw5b1e4GXF4BbKPTBtBev~cCFuC7qsCg8rKOTCC7FvrV7HSnSG9byvyk-S8febdZb7FvTZVRhSqGMI4NGjuu42u7RYDKZ2VnoaXV6JNurKSqq99jTWBaw7aTf43VblRM0EhwUePHAFT9tU8NmiFvgmKln--oF8pBOEUaG2EVfgR2WVqJ~jxC-LhKKllJqkjegSF5HonJiTaBjXqUJu2EdKZTzsuBjwCTP2recVDmvqqSa-Q__",
    "https://s3-alpha-sig.figma.com/img/abed/b2ae/b705f7046939a538fe5d670e066e8efa?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U4IH7J0HW1Qef9WCtEx-nDv7sVBHONG3543Ce7bdIuhNBYFGwZpECNN4xUm37P0S1Hj-6UoE2-b324FCcdaslByDMOmWwGXkEagpsHo44Gd3-EbDCwmCDVB8aH7~vaXEbS6j6yXWj3EpDRMXsdValOxEmgfTp1QeCRfisrvfl0MoOltSbqeZwJg7MM2SDbJkYpS~EcmAYHXMCezwQKIMPF5H8gTGVNWN6VUHj4GNuxvHLBi20evezuOH4tFQt2IC3QvH0NP5Mjk5g9R1WiKGRhXyfPdNCT6Szc1ksgOtC8kz~2IzxTjd-4MsspHjhR~f1nazUW3ilHBwFvFJjQTPYw__",
    "https://s3-alpha-sig.figma.com/img/c76d/bcdf/079e54862d988ecd43d10471d8d7456b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ksB3Kr41mBnxK~2g~5E11d8sI-L7eBmy7dDgDK8GYrIOiUf5D7KPoH3RJPEPEb517Xp2IE8MdOgLAZfJu70kL6eweXRel6H~Pmgee-1q9BXVJ6uFifri4UJwvRDsHwFsAG7-MFs23XKRLWIGjKClOZe8qZuSsqxZMr8Jqup1wSY2uOXWMEztDJLTfgFZ-4YoHkBH6~eCum-qJ4wpvyrpzr0k1WeGZMPZS-Y-5YGBXM~pCkFEgVA8fRmrZmgsaGFOxzCsNuj9ksQJmeIDptMzIgtgpx5KjQMKjuazPC1nJaKx96f0VVbL2yDwLZg2xPwooSnzNs75byzSFlPdp7njJg__",
    "https://s3-alpha-sig.figma.com/img/9dac/e9c2/c1f3220069a999b1e11b8ffe034feae2?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=o7kk4TVfXKPnXcC-KFmxuwMAeRkJsXkZd1DGAQUxRusXoFw6oHz13l3QvURYjp3dU9vaMgzA3w3WJZwud0p0Ga6~hgwgXm5dXmxwYN-LHcsxjfFgcFNNGsd3jdxGtXq-N~q1kZQ7j4jr9zJyGrrMohismiD0nPK4CQQij2kALj64Df6D~zGLFOi6XTDS4I3AoXqmZaqmTdrNvlCmP16UPwob2kgm8zDUEInSYrWJ0KSVeJId6-2O16Lmbv4qUEp4AF-z8x3wTFedQKuU4Jyh3tnsNm5VsSiQho98IPhDYTyt0DhhJEc3sQG6OcjJI9LyYE60MRO~47MiSrpVmR32Rw__",
    "https://s3-alpha-sig.figma.com/img/b8e0/1b63/7cf3b3373e4fbf47f5d6bb2eff6cc211?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ajwkt6rb7SObqWARX~LQMY0NEIBbeTMazMLUpIT7EeGwNWjjsFHmtirshePv1OSeo054U4bIxVMUgw8TGcpqQncj7LpXogZy8UR5OaEfH3BP0RfJ6paSOFhnQbgIhB5HgloyhXzl-Dq50858wKMcNRQCdFnEn79MCDJtFY-gojK1wnGV4LhtKZXo22OS4CkkFjDGRK744upWQBbxC62NxkdSMfI-t9huRdePUecRCt6iwovWpoxqCWlP4fIEhPlKEQWDSNC8YjSJhO3KWzWeV7yw3nNG2A~6k8jpyIN62uOVg~n943zdZoRY7HUuHfoGV1ioegz~IQ2xLBn7j99b0A__",
    "https://i.pinimg.com/736x/01/f6/07/01f607319083d5a67cf5f4baef411f52.jpg",
    "https://i.pinimg.com/736x/f6/f0/85/f6f0850acfe2992a4ce7f05b7343edfe.jpg",
    "https://wieck-nissanao-production.s3.amazonaws.com/photos/c37c55d356151560f47af1e7678fe0bc475d2922/thumbnail-364x204.jpg",
    "https://images.ctfassets.net/h67z7i6sbjau/5zteWRcC1qbgLZoClcMmYl/a0391fdc321eddce7de41152108723b5/Brand_Guidelines_hero_2x.jpg?fm=webp&q=85"
  ];


  useEffect(() => {
    setClonedImages([...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls]);
  }, []);

  useEffect(() => {
    if (!containerRef.current || clonedImages.length === 0) return;

    const scrollContainer = containerRef.current;
    const scrollWidth = scrollContainer.scrollWidth;


    const speed = direction === 'left' ? -30 : 30;
    let currentPosition = 0;
    let animationFrameId;

    const animate = () => {
      currentPosition += speed * 0.06;

      const halfWidth = scrollWidth / 2;
      if (Math.abs(currentPosition) >= halfWidth) {
        currentPosition = 0;
      }

      scrollContainer.style.transform = `translateX(${currentPosition}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);


    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [clonedImages, direction]);

  return (
    <div className="relative flex overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex"
        style={{ willChange: 'transform' }}
      >
        {clonedImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="marquee"
            className="h-20 w-28 object-contain mx-4"
          />
        ))}
      </div>
    </div>
  );
}

function BrandAdvertisement() {
  return (
    <div className="bg-white max-sm:py-2 sm:py-4 lg:py-12 w-full overflow-hidden">
      <Marquee direction="left" />
    </div>
  );
}

export default BrandAdvertisement;
