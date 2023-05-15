import MapWeAre from 'public/landing/map.svg';

export default function weAre() {
  return (
    <div className="h-screen">
      <div
        className="flex px-40"
        style={{
          backgroundImage: `url(${MapWeAre.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="pt-10">asd</div>
      </div>
    </div>
  );
}
