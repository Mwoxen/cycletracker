Pod::Spec.new do |s|
  s.name           = 'CycleSync'
  s.version        = '1.0.0'
  s.summary        = 'Keeps the two phones in step through a private CloudKit share'
  s.description    = s.summary
  s.author         = ''
  s.homepage       = 'https://github.com/Mwoxen/cycletracker'
  s.platforms      = { :ios => '15.1' }
  s.source         = { git: '' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  s.frameworks = 'CloudKit'

  s.source_files = '**/*.{h,m,mm,swift}'
end
