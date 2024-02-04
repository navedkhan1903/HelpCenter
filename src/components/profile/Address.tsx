export default function Address({ address }: { address: any }) {
  return (
    <>
      <p className="text-gray">Phone:</p>
      <p className="pb-5">{address.phone}</p>
      {address.altPhone && (
        <>
          <p className="text-gray">Alt. Phone:</p>
          <p className="pb-5">{address.altPhone}</p>
        </>
      )}
      <p className="text-gray">Address:</p>{" "}
      <p className="pb-5">
        {address.address}, {address.locality}, {address.city}, {address.state}
      </p>
      <p className="text-gray">Pincode: </p>
      <p>{address.pincode}</p>
    </>
  );
}
