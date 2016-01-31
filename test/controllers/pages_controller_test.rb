require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get learn" do
    get :learn
    assert_response :success
  end

  test "should get teach" do
    get :teach
    assert_response :success
  end

  test "should get programs" do
    get :programs
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
