require 'test_helper'

class RecipesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get recipes_create_url
    assert_response :success
  end

end
