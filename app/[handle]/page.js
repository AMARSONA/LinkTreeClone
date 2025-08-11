
import connectDB from "@/lib/mongoDB";
import { notFound } from "next/navigation";
import BitLinks from "@/models/BitLinks";

export default async function Page({ params }) {
    const {handle} = await params
    await connectDB(); // Connect to MongoDB via Mongoose
    // const db = client.db("bittree")
    // const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await BitLinks.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }

    console.log(item)

    const item2 = {
        "_id": {
            "$oid": "6729e97390cf30c8f66c4c68"
        },
        "links": [
            {
                "link": "https://www.instagram.com/Amar",
                "linktext": "Instagram"
            },

            {
                "link": "https://www.YouTube.com/Amar",
                "linktext": "YouTube"
            }
        ],
        "handle": "Amar",
        "pic": "https://avatars.githubusercontent.com/u/48705673?v=4"
    }
    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        {item && <div className="photo flex justify-center flex-col items-center gap-4">
            <img className="border-8 rounded-2xl" src={item.pic} alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                        <div className="border-3 bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                            {item.linktext}</div>
                    </a>
                })}
            </div>
        </div>}
    </div>
}