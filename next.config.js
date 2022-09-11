const { PHASE_DEVELOPMENT_SERVER } = require( 'next/constants' );

module.exports = ( phase ) =>
{
  if ( phase === 'PHASE_DEVELOPMENT_SERVER' )
  {
    return {
      env: {
        mongodb_username: 'nextberzan',
        mongodb_password: 'nextberzan',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site'
      }
    };

  }
  return {
    env: {
      mongodb_username: 'nextberzan',
      mongodb_password: 'nextberzan',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site'
    }
  };
};

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

///** @type {import('next').NextConfig} */
//const nextConfig = {
//  reactStrictMode: true,
//  swcMinify: true,
//};
//
//module.exports = nextConfig;
