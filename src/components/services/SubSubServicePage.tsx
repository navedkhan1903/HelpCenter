import Wrapper from "../shared/Wrapper";
import Breadcrumbs from "./Breadcrumbs";
import { Toaster } from "react-hot-toast";
import SubServiceCard from "./SubServiceCard";

interface Props {
  script?: any;
  title: string;
  subTitle: string;
  breadcrumbs: any;
  services: any;
}

export default function SubSubServicePage(props: Props) {
  const { script, title, subTitle, breadcrumbs, services } = props;

  return (
    <>
      {script && (
        <script type="application/ld+json" dangerouslySetInnerHTML={script} />
      )}
      <Toaster />
      <Wrapper title={title} subTitle={subTitle}>
        <>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service: any, i: any) => (
              <SubServiceCard service={service} key={i} />
            ))}
          </div>
        </>
      </Wrapper>
    </>
  );
}
