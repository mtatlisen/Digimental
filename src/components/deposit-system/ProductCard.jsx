import React, { useState, memo } from 'react';

// Product Card
export const ProductCard = memo(({ product }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    
    return (
        <div className="card-hover rounded-2xl overflow-hidden bg-[#111113]">
            {/* Image */}
            <div className="product-image aspect-square relative overflow-hidden">
                {!imgLoaded && (
                    <div className="absolute inset-0 bg-[#151517] animate-pulse" />
                )}
                <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    onLoad={() => setImgLoaded(true)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                {product.tag && (
                    <span className="absolute top-3 left-3 bg-emerald-500 text-black text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {product.tag}
                    </span>
                )}
            </div>
            
            {/* Info */}
            <div className="p-5">
                <div className="text-emerald-400 text-xs font-medium mb-1">{product.brand}</div>
                <h3 className="text-white font-semibold text-lg mb-3">{product.name}</h3>
                
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Kapasite</span>
                        <span className="text-gray-300">{product.capacity}</span>
                    </div>
                    {product.speed && (
                        <div className="flex justify-between">
                            <span className="text-gray-500">Hız</span>
                            <span className="text-gray-300">{product.speed}</span>
                        </div>
                    )}
                    <div className="flex justify-between">
                        <span className="text-gray-500">Malzeme</span>
                        <span className="text-gray-300">{product.materials}</span>
                    </div>
                </div>
            </div>
        </div>
    );
});
