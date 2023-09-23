export default function UserProfile({ params }: any) {
  return (
    <div className="flex felx-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">Profile Page</p>
      <span className="p-2 rounded bg-orange-500 text-black font-bold">
        {" "}
        {params.id}
      </span>
    </div>
  );
}
