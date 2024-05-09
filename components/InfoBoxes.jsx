import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading={'для арендаторов'}
            buttonInfo={{
              text: 'Подобрать недвижимость',
              link: '/properties',
              backgroundColor: 'bg-amber-300',
            }}
          >
            Найдите недвижимость вашей мечты. Добавьте объекты в закладки и
            свяжитесь с нами
          </InfoBox>
          <InfoBox
            heading={'для арендодателей'}
            backgroundColor="bg-emerald-100"
            buttonInfo={{
              text: 'Подобрать недвижимость',
              link: '/properties',
              backgroundColor: 'bg-green-500',
            }}
          >
            Составьте список своей недвижимости и свяжитесь с потенциальными
            арендаторами. Сдавайте в аренду на короткий или на длительный срок.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
