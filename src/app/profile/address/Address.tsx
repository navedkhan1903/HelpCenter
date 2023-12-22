"use client";

import Wrapper from "../Wrapper";
import { useState } from "react";

export default function Info() {
  const [disabled, setDisabled] = useState(true);

  return (
    <Wrapper
      loading={false}
      label="Manage Addresses"
      onEdit={() => setDisabled(false)}
      onSave={() => {}}
      onCancel={() => setDisabled(true)}
      disabled={disabled}
    >
      <div></div>
    </Wrapper>
  );
}
