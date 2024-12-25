function importAll(globImport: Record<string, any>, type: string) {
    return Object.keys(globImport).map((path, index) => {
        const fileNameWithExtension = path.split('/').pop()!;
        const filename = fileNameWithExtension.split('.')[0];
        return {
            id: index + 1,
            name: filename,
            src: path,
            type
        };
    });
}

export const videos = importAll(
    import.meta.glob('/src/assets/videos/*', { eager: true, import: 'default' }),
    'videos'
);

export const images = importAll(
    import.meta.glob('/src/assets/images/*', { eager: true, import: 'default' }),
    'images'
);
