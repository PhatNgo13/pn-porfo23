interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset:{
        _rev: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    backgroundInformation: string;
    heroImage: Image;
    name: string;
    profilePic: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    progress: number;
    titles: string;
}

export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
}