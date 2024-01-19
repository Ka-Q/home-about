import { performRequest } from "@/lib/datocms";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    const tags = request.nextUrl.searchParams.get("tags")? request.nextUrl.searchParams.get("tags").split(',') ?? [] : [];
    const query = `
	query {
		allProjects ${tags.length > 0? '(filter: {tags: {anyIn: ["' + tags.join('","') + '"]}})' : ""}{
			id
			name
			slug
			previewImage {
				url
			}
			tags {
				name
			}
			externalLinks {
				linktype
				url
				text
			}
			description
		}
	}`;

    console.log(query);

    try {
        const {data: {allProjects}} = await performRequest({ query: query});
        return NextResponse.json({data: {allProjects}});
    } catch {
        return NextResponse.json({message: "error"});
    }
    
}