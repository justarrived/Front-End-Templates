root = '.'
use Rack::Static,
  urls: Dir.glob("#{root}/*").map { |fn| fn.gsub(/#{root}/, '')},
  root: root,
  index: 'index.html',
  header_rules: [[:all, {'Cache-Control' => 'public, max-age=86400'}]]

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}
