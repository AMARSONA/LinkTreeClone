import connectDB from "@/lib/mongoDB";
import BitLinks from "@/models/BitLinks";


export async function POST(request) {

  try {
    const body = await request.json()
    const { handle, desc, pic, links } = body;

    await connectDB();

    const doc = await BitLinks.findOne({ handle: body.handle })

    if (doc) {
      return Response.json
        ({
          success: false,
          error: true,
          message: 'This Bittree already exists,Choose a different one',
          // result: null
        })
    }

    await BitLinks.create({
      handle: handle,
      desc: desc,
      pic: pic,
      links: links
    });

    return Response.json
      ({
        success: true,
        error: false,
        message: 'Your Bittree has been generated!',
        // result: result
      })


  } catch (error) {
    console.error("POST/api/generate error:", error);
    return Response.json(
      {
        success: false,
        error: true,
        message: "Server error",
      },
      { status: 500 }
    );
  }

}