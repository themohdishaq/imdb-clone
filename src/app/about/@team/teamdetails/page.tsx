import React from 'react';

function TeamDetails() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {[
                { name: "Muhammad Ishaq", position: "CEO", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s"},
                { name: "Uzair Ali", position: "CTO", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s"},
                { name: "Maria Asan", position: "CMO", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s"},
                { name: "John Vick", position: "COO", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCW8ayM9K_iNzX81NSjgpGcl30jDvsTSiIg&s" }
            ].map((member, index) => (
                <div key={index} className="w-full px-2">
                    <div className="py-4 px-4 bg-white rounded-xl shadow-lg space-y-2 flex sm:flex-row flex-col sm:items-center">
                        <img className=" mx-auto h-auto w-16 rounded-full flex-1" src={member.imgSrc} alt={`${member.name}'s Face`} />
                        <div className="text-left space-y-2 flex-1">
                            <div className="space-y-0.5">
                                <p className=" text-black font-semibold">
                                    {member.name}
                                </p>
                                <p className="text-sm text-slate-500 font-medium">
                                    {member.position}
                                </p>
                            </div>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TeamDetails;