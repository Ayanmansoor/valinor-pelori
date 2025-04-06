import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={278}
        height={280}
        viewBox="0 0 278 280"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="278" height="199" />
        <rect x="0" y="210" rx="0" ry="0" width="235" height="19" />
        <rect x="0" y="240" rx="0" ry="0" width="269" height="11" />
    </ContentLoader>
);

const SkeletonGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {[1, 2, 3, 4].map((item) => (
                <CardSkeleton key={item} />
            ))}
        </div>
    );
};

export default SkeletonGrid;
