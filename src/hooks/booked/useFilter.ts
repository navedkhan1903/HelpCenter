import { useState, useEffect } from "react";

interface Props {
  servicesData: any;
}

export default function useFilter({ servicesData }: Props) {
  const [service, setService] = useState<any>("");
  const [slot, setSlot] = useState<any>("");
  const [status, setStatus] = useState<any>("");
  const [filteredServices, setFilteredService] = useState();

  console.log(filteredServices);

  useEffect(() => {
    setFilteredService(servicesData);
  }, [servicesData]);

  useEffect(() => {
    if (service) {
      setFilteredService(
        servicesData.filter((item: any) => item.service === service.label),
      );
      setSlot("");
      setStatus("");
    }
  }, [service]);

  useEffect(() => {
    if (slot) {
      setFilteredService(
        servicesData.filter((item: any) => item.slot === slot.label),
      );
      setService("");
      setStatus("");
    }
  }, [slot]);

  useEffect(() => {
    if (status) {
      setFilteredService(
        servicesData.filter((item: any) => item.status === status.label),
      );
      setService("");
      setSlot("");
    }
  }, [status]);

  function handleReset() {
    setFilteredService(servicesData);
    setService("");
    setSlot("");
    setStatus("");
  }

  return {
    service,
    slot,
    status,
    filteredServices,
    setService,
    setSlot,
    setStatus,
    setFilteredService,
    handleReset,
  };
}
