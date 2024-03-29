import { performRequest } from "@/lib/datocms";
import { NextResponse } from "next/server";

export const GET = async () => {
    const query = `
	query {
		allProjects (orderBy: finishDate_DESC) {
			id
			name
			slug
			previewImage {
				url
			}
			tags {
				id
				name
			}
			externalLinks {
				linktype
				url
				text
			}
			description
		}
		allTags (orderBy: name_ASC) {
			id
			name
		}
	}`;

    try {
        const {data: {allProjects, allTags}} = await performRequest({ query: query, revalidate: 60 });
        return NextResponse.json({data: {allProjects, allTags}});
    } catch {
        return NextResponse.json({message: "error"});
    }
    
}