function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[450px]">

        <h1 className="text-4xl font-black mb-8">
          Profile
        </h1>

        <div className="space-y-4 text-lg">
          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Department:</strong>{" "}
            {user?.department}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Profile;